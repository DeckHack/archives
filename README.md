# TweetDeck Asset Archive 2017/2018

Back when DeckHack had to deal more actively with Twitter working on (legacy) TweetDeck, we decided to write up [~~multiple tools~~](https://github.com/DeckHack/deckcheck) [one tool](https://github.com/DeckHack/rasp) to track changes happening to the application.

This was later extended with [~~an additional script~~](https://github.com/DeckHack/assetflip) functionality also added in rasp that downloaded the assets for each new revision of TweetDeck that we detected.

Long lost on an old hard drive, now since TweetDeck is gone, have them!

## Structure

* `assets/` contains subfolders, named at the timestamp at which a new revision happened, containing all TweetDeck assets from that revision
* `reports/` contains HTML files with the same timestamps as names with a visual diff for changes that happened between specific configuration values in TweetDeck and some of the assets

## License

DeckHack is (obviously) not affiliated with TweetDeck, and these assets belong to Twitter