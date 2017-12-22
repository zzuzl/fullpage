var json = {
    "title": {
        "media": {
            "url": "",
            "caption": "Whitney Houston performing on her My Love is Your Love Tour in Hamburg.",
            "credit": "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
        },
        "text": {
            "headline": "Whitney Houston<br/> 1963 - 2012",
            "text": "<p>Houston's voice caught the imagination of the world propelling her to superstardom at an early age becoming one of the most awarded performers of our time. This is a look into the amazing heights she achieved and her personal struggles with substance abuse and a tumultuous marriage.</p>"
        }
    },
    "events": [
        {
            "media": {
                "url": "",
                "caption": "Houston's mother and Gospel singer, Cissy Houston (left) and cousin Dionne Warwick.",
                "credit": "Cissy Houston photo:<a href='http://www.flickr.com/photos/11447043@N00/418180903/'>Tom Marcello</a><br/><a href='http://commons.wikimedia.org/wiki/File%3ADionne_Warwick_television_special_1969.JPG'>Dionne Warwick: CBS Television via Wikimedia Commons</a>"
            },
            "start_date": {
                "month": "8",
                "day": "9",
                "year": "1963"
            },
            "text": {
                "headline": "A Musical Heritage",
                "text": "<p>Born in New Jersey on August 9th, 1963, Houston grew up surrounded by the music business. Her mother is gospel singer Cissy Houston and her cousins are Dee Dee and Dionne Warwick.</p>"
            }
        },
        {
            "media": {
                "url": "",
                "caption": "I Wanna Dance With Somebody",
                "credit": "Arista Records Inc."
            },
            "start_date": {
                "year": "1987"
            },
            "text": {
                "headline": "'Whitney'",
                "text": "Multiplatinum second album sells more than 20 million copies worldwide. With 'Whitney', Houston became the first female artist to produce four number 1 singles on one album including \"I Wanna Dance With Somebody,' 'Didn't We Almost Have It All,' 'So Emotional' and 'Where Do Broken Hearts Go.'"
            }
        },
        {
            "media": {
                "url": "",
                "caption": "\"One Moment In Time\" - Theme song to the 1988 Seoul Olympics",
                "credit": "Arista Records Inc."
            },
            "start_date": {
                "year": "1988"
            },
            "text": {
                "headline": "\"One Moment In Time\"",
                "text": "The artist's fame continues to skyrocket as she records the theme song for the Seoul Olympics, 'One Moment In Time.'"
            }
        }
    ]
};

var options = {
    start_at_end: true,
    default_bg_color: {r: 0, g: 0, b: 0},
    timenav_height: 250
};

$('#fullpage').hide();
$('.right').hide();
$('#timeline').show();

window.timeline = new TL.Timeline('timeline', json, options);