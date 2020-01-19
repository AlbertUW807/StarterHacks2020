import twitterCredentials
import tweepy
import re


class Tweets:

    def __init__(self, movie):
        self.tweets_data = None
        self.tweets = None
        self.movie = movie
        auth = tweepy.OAuthHandler(twitterCredentials.consumer_key, twitterCredentials.consumer_secret)
        auth.set_access_token(twitterCredentials.access_token, twitterCredentials.access_token_secret)
        self.api = tweepy.API(auth, wait_on_rate_limit = True, wait_on_rate_limit_notify = True)
        self.tweets_data = tweepy.Cursor(self.api.search,q=self.movie,count=30, result_type="mixed", tweet_mode="extended").items(60)
        self.tweets = [tweet.full_text for tweet in self.tweets_data]
        self.cleanTweets()

    def getComments(self):
        return self.tweets

    def getCommentData(self):
        return self.tweets_data
    
    def cleanTweets(self):
        for i in range(len(self.tweets)):
            self.tweets[i] = re.sub(r"http\S+", "", self.tweets[i])
            self.tweets[i] = re.sub('@[^\s]+','', self.tweets[i])


# def getComments(movie):
#     auth = tweepy.OAuthHandler(twitterCredentials.consumer_key, twitterCredentials.consumer_secret)
#     auth.set_access_token(twitterCredentials.access_token, twitterCredentials.access_token_secret)
#     api = tweepy.API(auth, wait_on_rate_limit = True, wait_on_rate_limit_notify = True)
#     # tweets = api.search(q=movie, result_type="popular", count=20, lang="en")
#     tweets_data = api.search(q=movie,count=20, lang="en", result_type="popular", tweet_mode="extended")
#     tweets = [tweet.full_text for tweet in tweets_data]
#     print(len(tweets))
#     cleanTweets(tweets)
#     for tweet in tweets:
#         print(tweet)

# getComments("joker")

# Most common tweets are showing which emotion?
# Most positive reaction vs most negative reaction?
# Avg sentiment regarding movie
# Add "box office" to search query to check audience avg. sentiment.
#

