from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import twittercomments
import pandas as pd 

def analyzeTwitterSentiment(movie):
    global tweets_df
    analyser = SentimentIntensityAnalyzer()
    tweeter = twittercomments.Tweets(movie)
    tweets = tweeter.getComments()
    tweets_dict = {}
    for tweet in tweets:
        tweets_dict[tweet] = analyser.polarity_scores(tweet)
    # print(tweetsDict)
    tweets_df = pd.DataFrame(tweets_dict.items(), columns=['Tweet', 'sentiment_info'])
    tweets_df["sentiment"] = tweets_df.apply(lambda row: row["sentiment_info"]["compound"], axis=1)
#    print(tweets_df.loc[tweets_df['avg_sentiment'].idxmax()]["Tweet"])
    most_positive_tweet = tweets_df.loc[tweets_df['sentiment'].idxmax()]["Tweet"]
    most_negative_tweet = tweets_df.loc[tweets_df["sentiment"].idxmin()]["Tweet"]
    avg_sentiment = sum(tweets_df["sentiment"])/len(tweets_df["sentiment"])
    print(f"{avg_sentiment} is the average sentiment")
    print(most_positive_tweet)
    print(most_negative_tweet)
#    print(tweets_df)
analyzeTwitterSentiment("justice league box office")

def analyzeYoutubeCommentSentiment(movie):
    pass

def analyzeNewsSentiment(movie):
    pass
