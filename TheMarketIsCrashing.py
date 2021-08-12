# This line import the collections library for storing data in a container.
from collections import defaultdict
# This line of code imports a time module with extensions that allows us to
# also represent the time in different formats.
import dateutil.parser
# This line of code imports the finance plot which allows us to plot prices with
# different financial tools and candlesticks.
import finplot as fplt
# This line of code imports the numpy library to be able to perform certain mathematical
# operations.
import numpy as np
# This line of code imports the pandas library to be able to plot charts in that format.
import pandas as pd
# This line of code allows us to get HTTP requests from a server for our data.
import requests
# Here we are defining the url for the API Currency Exchange data.
baseurl = 'https://www.bitmex.com/api'
# Here we are defining a function for the timestamps that will be used in the chart.
def local2timestamp(s):
# This line of code returns the timestamp in the dateutil time module with the format given from the parser function.
    return int(dateutil.parser.parse(s).timestamp())
# This line of code defines a function that will reteive the price data from the BitMex API and specifies the timeline and
# the period that each time section should span. XBTUSD is just another abbreviation for Bitcoin.
def download_price_history(symbol='XRPUSD', start_time='2020-01-10', end_time='2021-05-07', interval_mins=60):
    # This defines the start time of the chart to be 2010 and to use the dateutil time module extension.
    start_time = local2timestamp(start_time)
    # This line of code defines the end time of the chart to be 2021 and to use the dateutil time module.
    end_time = local2timestamp(end_time)
    # This line of code defines the data to be equal to be equal to default dict class that is represented as list.
    data = defaultdict(list)
    # This line of code defines a range function
    for start_t in range(start_time, end_time, 10000*60*interval_mins):
        end_t = start_t + 10000*60*interval_mins
        if end_t > end_time:
            end_t = end_time
        url = '%s/udf/history?symbol=%s&resolution=%s&from=%s&to=%s' % (baseurl, symbol, interval_mins, start_t, end_t)
        print(url)
        d = requests.get(url).json()
        del d['s'] # ignore status=ok
        for col in d:
            data[col] += d[col]
    # This defines the data to be equal to a pandas data frame.
    df = pd.DataFrame(data)
    # This line of code defines the price data to be equal to all of the variations of price that are given in
    # in the BitMex and yahoo finance API.
    df = df.rename(columns={'t':'time', 'o':'open', 'c':'close', 'h':'high', 'l':'low', 'v':'volume'})
    # This line of code returns time index Data Frame using the index functionality.
    return df.set_index('time')
    # This line of code defines a function for the accumulation distribution (the amount of trades that are being placed by investors).
def plot_accumulation_distribution(df, ax):
    ad = (2*df.close-df.high-df.low) * df.volume / (df.high - df.low)
    ad.cumsum().ffill().plot(ax=ax, legend='Accum/Dist', color='#f00000')
    # This line of code defines a function for the Data Frame of the bollinger bands.
def plot_bollinger_bands(df, ax):
    # Since the Bollinger bands are a Donchian Channel following a Moving Average, we have to define the Moving Average which is not weighted or exponential so it is just the mean value.
    mean = df.close.rolling(20).mean()
    # This line of code defines the Standard Deviation for the Rolling Bollinger Bands.
    stddev = df.close.rolling(20).std()
    # This lines of code defines the high rolling bollinger band which is
    # just a donchian channel that also follows the SMA, EMA or WMA.
    df['boll_hi'] = mean + 2.5*stddev
    # This lines of code defines the low rolling bollinger band which is
    # just a donchian channel that also follows the SMA, EMA or WMA.
    df['boll_lo'] = mean - 2.5*stddev
    # This line of code creates a plot for the high bollinger band, where we also define it's properties.
    p0 = df.boll_hi.plot(ax=ax, color='#808080', legend='BB')
    # This line of code creates a plot for the low bollinger band, where we also define it's properties.
    p1 = df.boll_lo.plot(ax=ax, color='#808080')
    # This line of code fills in the bollinger band in the finance plot and also specifies that colour that the area between the bands should be.
    fplt.fill_between(p0, p1, color='#bbb')
    # This line of code defines a function for the plotting Exponential Moving Average.
def plot_ema(df, ax):
    # This line of code defines the
    df.close.ewm(span=9).mean().plot(ax=ax, legend='EMA')
    # This line of code defines a function that will represent the price and each Indicator in the heikin-ashi format.
def plot_heikin_ashi(df, ax):
    #This line of code defines a
    df['h_close'] = (df.open+df.close+df.high+df.low) / 4
    ho = (df.open.iloc[0] + df.close.iloc[0]) / 2
    for i,hc in zip(df.index, df['h_close']):
        df.loc[i, 'h_open'] = ho
        # This line of code defines opening price. But since the Heikin Ashi format tries to remove "noise" or "gaps" from price action, it is calculated differently. Therefore we also have to input this into our code.
        # The Opening Candlestick for the Heikin-Ashi format is calculated as (The previous opening price + The previous closing price)/2.
        ho = (ho + hc) / 2
        # This line of code prints the Heikin-Ashi opening price iin a Data Frame.
    print(df['h_open'])
    # This line of code defines the types of prices that the Heikin-Ashi high candles can have in a Data Frame.
    df['h_high'] = df[['high','h_open','h_close']].max(axis=1)
    # This line of code defines the types of prices that the Heikin-Ashi low candles can have in a Data Frame.
    df['h_low'] = df[['low','h_open','h_close']].min(axis=1)
    # This line of code defines the types of prices that the Heikin-Ashi low candles can have in a Data Frame.
    df[['h_open','h_close','h_high','h_low']].plot(ax=ax, kind='candle')
    # This line of code defines a function for plotting the volume in the heikin-ashi format.
def plot_heikin_ashi_volume(df, ax):
    df[['h_open','h_close','volume']].plot(ax=ax, kind='volume')
    # This line of code defines the Balanced Volume for a specific stock or currency exchange (It is a momentum Indicator using volume to make predicitions).
    # The volume indicates how many shares of that stock or currency are being bought, so this will define the momentum of the market.
def plot_on_balance_volume(df, ax):
    # This line of code defines the Balanced Volume to be a copy of the Data Frame of the Volume Indicator.
    obv = df.volume.copy()
    # This line of code defines
    obv[df.close < df.close.shift()] = -obv
    # This line of code
    obv[df.close==df.close.shift()] = 0
    # This line of code plots the On Balance Volume Data Frame and defines it's properties.
    obv.cumsum().plot(ax=ax, legend='OBV', color='#008800')
    # This line of code defines a function for plotting the RSI Indicator.
def plot_rsi(df, ax):
    # This line of code defines the difference between the Closing Price Values.
    diff = df.close.diff().values
    # The gains/profits are the positive difference.
    gains = diff
    # The gains/losses are the the negative difference.
    losses = -diff
    # This line of code defines a function for where the values of the Gains and Losses are invalid and tells the computer it to ignore it.
    with np.errstate(invalid='ignore'):
        # This line of code defines that if the Gains are less than 0, then it is just 0 meaning that is 0/Loss which equals 0.
        gains[(gains<0)|np.isnan(gains)] = 0.0
        # This line of code defines that if the Losses are less than or equal to 0, then it is undefined and should only equal e^-10 as the smallest number that can be used.
        losses[(losses<=0)|np.isnan(losses)] = 1e-10 # we do
        # n't want divide by zero/NaN
    # This line of code defines the value "n" which is ... and will be used in the calculation of the Percentage Gain and Percentage Loss.
    n = 14
    # This line of code defines the value "m" which is ... and will be used in the calculation of the Percentage Gain and Percentage Loss.
    m = (n-1) / n
    # This line of code defines the value "ni" which is ... and will be used in the calculation of the Percentage Gain and Percentage Loss.
    ni = 1 / n
    # This line of code uses the Numpy library to define the Average Gains which is used in the calculation of the RSI Indicator. To only get the Average Gains we used the "nanmean" function to return the average
    # of an array of elements which in this case would be the prices.
    g = gains[n] = np.nanmean(gains[:n])
    # This line of code uses the Numpy library to define the Average Losses which is used in the calculation of the RSI Indicator. To only get the Average Losses we used the "nanmean" function to return the average
    # of an array of elements which in this case would be the prices.
    l = losses[n] = np.nanmean(losses[:n])
    # The [:n] function in Python is called Slicing and it allows you to return only a specified amount of characters of a string or list (for arrays you have to specify the Index). [:n] says to
    # get all of the values up to n of some array which contains values such as strings or numbers.
    # This line of code says that
    gains[:n] = losses[:n] = np.nan
    # This line of code creates a "for" function (which loops over) which
    for i,v in enumerate(gains[n:],n):
        # This defines g to be equal to gains, which is an array of the Ith element containing the gains which is also equal to the
        # The reason this formula for the losses works is because
        g = gains[i] = ni*v + m
    # This line of code creates a "for" function (which loops over) which
    for i,v in enumerate(losses[n:],n):
        # This defines l to be equal to losses, which is an array of the Ith element containing the losses which is also equal to the
        # The reason this formula for the losses works is because
        l = losses[i] = ni*v + m*l
    # This line of code defines the Relative Strength.
    rs = gains / losses
    # This line of code defines the RSI Data Frame to be equal to 100 - 100(/(1+Relative Strength)).
    # The Relative Strength is defined to be the Average Gain over the Average Loss which we have defined previously in our code.
    # The reason it is equal to this is because we are looking for the "Strength" in the market or a "Percent change" and we can do this by checking if that change is
    # Positive meaning there's strength and if the change is negative then then there's weakness.
    df['rsi'] = 100 - (100/(1+rs))
    # This line of code plots the RSI indicator and sets it's label.
    df.rsi.plot(ax=ax, legend='RSI')
    # This line of code sets a range for the y-axis, such that the chart only stays in a specific region of the Finance Plot.
    fplt.set_y_range(0, 100, ax=ax)
    # This line of code defines a band for the RSI Indicator.
    fplt.add_band(30, 70, ax=ax)
    # This line of code defines a function for plotting the Volumetric Moving Average which shows the average volume over a specified amount of time.
def plot_vma(df, ax):
    # This line of code defines the rolling bollinger bands over a twenty day period and set's it's properties.
    df.volume.rolling(20).mean().plot(ax=ax, color='#c0c030')
    # This defines that the currency should be Bitcoin.
symbol = 'XBTUSD'
# This line of code defines the Data Frame to be equal to the downloaded price history of that currency or stock.
df = download_price_history(symbol=symbol)
# This line of code defines the axes and creates the Finance Plot with all of it's properties.
ax,axv,ax2,ax3,ax4 = fplt.create_plot('BitMEX %s heikin-ashi price history' % symbol, rows=5)
# This line of code sets the container to be visible.
ax.set_visible(xgrid=True, ygrid=True)
# price chart
plot_heikin_ashi(df, ax)
# This line of code plots the bollinger bands.
plot_bollinger_bands(df, ax)
# This line of code plots the Exponential Moving Average Data Frame.
plot_ema(df, ax)
# volume chart
plot_heikin_ashi_volume(df, axv)
# This line of code plots the Volumetric moving average.
plot_vma(df, ax=axv)
# some more charts
# This line of code plots the accumulation distruibution, or in other words, the amount of stock or exchanged currency was bought in a specific period of time.
plot_accumulation_distribution(df, ax2)
# This line of code defines a third axis and a Data Frame for the balance volume indicator. The Balance Volume indicator is a measurement of the momentum of a stock or currency exchange.
plot_on_balance_volume(df, ax3)
# This line of code plots the RSI Indicator on a fourth axis.
plot_rsi(df, ax4)
# restore view (X-position and zoom) when we run this example again
fplt.autoviewrestore()
# This line of coe shows the finance plot.
fplt.show()

# import finplot as fplt
# import yfinance
# df = yfinance.download('VOO')
# fplt.candlestick_ochl(df[['Open', 'Close', 'High', 'Low']])
# fplt.plot(df['time'], df['close'].rolling(25).mean(), ax=ax, legend='ma-25')
# fplt.show()


