var tracery = require('tracery-grammar');

var rawGrammar = 
{
  "origin": [
    "I've been thinking #amount# #period# about #minorPhilosopher#, and I " +
      "am #inclination# that it's nothing but #majorPhilosopher# combined with " +
      "#majorPhilosopher# and #minorPhilosopher#.",
    "#majorPhilosopher# #verb1# that #claim#.",
    "#majorPhilosopher# #verb1# that #majorPhilosopher# espoused #adjective# "+
      "#position#.",
    "Some scholars #verb2# that #minorPhilosopher# #insult#.",
  ],
  "inclination": [
    "convinced",
    "still skeptical",
    "not certain",
    "dubious",
  ],
  "amount": [
    "a lot",
    "a bit",
    "too much",
    "obssessively",
  ],
  "period": [
    "this past month",
    "for months",
    "my entire life",
    "since school",
    "for as long as I can remember",
  ],
  "insult": [
    "drove #adjective# #position# out of #field#",
    "instilled #adjective# #position# into #field#",
  ],
  "field": [
    "politics",
    "philosophy",
    "analytic philosophy",
    "continental philosophy",
    "sociology",
    "physics",
    "biology",
    "chemistry",
    "contemporary logic",
    "medieval logic",
    "late-classical logic",
    "modern lisguistics",
  ],
  "verb2": [
    "have written",
    "have debated",
    "have argued",
    "used to say",
    "were quick to say",
    "did not hesitate to insinuate",
  ],
  "minorPhilosopher": [
    "Karl-Otto Apel",
    "Aristoxenus of Tarentum",
    "Siger of Brabant",
    "Boethius",
    "Antoine Arnauld",
    "Carl von Prantl",
    "Arthur Schopenhauer",
    "Daniel Dennett",
    "Jeremy Bentham",
    "H. B. Acton",
    "Alexander Bain",
    "C. D. Broad",
  ],
  "position": [
    "realism",
    "idealism",
    "nominalism",
    "relativism",
    "coherentism",
    "disjunctivism",
  ],
    "adjective": [
      "a nihilistic",
      "an egoistic",
      "a solipsistic",
      "an altruistic",
      "a foolish",
      "an opaque",
      "an obscure",
      "an ethical",
      "a sound",
    ],
    "claim": [
      "#noun# is #commonAdjective#",
      "#noun# is #commonAdjective# #position#"
    ],
  "noun": [
    "philosophy",
    "history",
    "mind",
    "god",
    "religion",
  ],
  "commonAdjective": [
    "tasteless",
    "fruitless",
    "unfunny",
    "uninteresting",
    "unintelligible",
    "fantastical",
    "inscrutable",
  ],
    "verb1": [
      "thinks",
      "believed",
      "once believed",
      "once wrote",
      "used to say",
      "said once, #inLocation#,",
    ],
  "inLocation": [
    "in a lecture",
    "in an essay",
    "in a letter",
    "while travelling",
    "while a visitting lecturer",
  ],
    "majorPhilosopher": [
      "Socrates",
      "Plato",
      "Aristotle",
      "Augustine",
      "Aquinas",
      "Descartes",
      "Leibniz",
      "Kant",
      "Hegel",
      "Russell",
      "Wittgenstein",
      "Heidegger",
      "Quine",
      "McDowell",
    ],
}

var processedGrammar = tracery.createGrammar(rawGrammar);

processedGrammar.addModifiers(tracery.baseEngModifiers); 

var tweet = processedGrammar.flatten("#origin#");
//console.log(tweet);


var Twit = require('twit');


var T = new Twit(
{
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
}
);


T.post('statuses/update', { status: tweet }, function(err, data, response) {
  //console.log(data)
})



