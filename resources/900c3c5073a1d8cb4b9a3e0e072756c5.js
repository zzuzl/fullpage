var config = {
    syncURL: "https://real-map.wilddogio.com"
};
wilddog.initializeApp(config);
var ref = wilddog.sync().ref();

var json = {
    "title": {
        "media": {
            "url": "",
            "caption": "Whitney Houston performing on her My Love is Your Love Tour in Hamburg.",
            "credit": "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
        },
        "text": {
            "headline": "磊磊&静静 的爱情回忆录",
            "text": "<p>遇到你是我的幸运，愿陪你走到天荒地老。 -- zl 2017-11-27</p>"
        }
    },
    "events": []
};

ref.once("value").then(function(snapshot){
    var dataSet = snapshot.val();
    for(var key in dataSet) {
        json.events.push({
            "media": {
                "url": "",
                "caption": "Houston's mother and Gospel singer, Cissy Houston (left) and cousin Dionne Warwick.",
                "credit": "Cissy Houston photo:<a href='http://www.flickr.com/photos/11447043@N00/418180903/'>Tom Marcello</a><br/><a href='http://commons.wikimedia.org/wiki/File%3ADionne_Warwick_television_special_1969.JPG'>Dionne Warwick: CBS Television via Wikimedia Commons</a>"
            },
            "start_date": {
                "month": dataSet[key].month,
                "day": dataSet[key].day,
                "year": dataSet[key].year
            },
            "text": {
                "headline": dataSet[key].title,
                "text": "<p>" + dataSet[key].text + "</p>"
            }
        });
    }
    window.timeline = new TL.Timeline('timeline', json, options);

    console.log(dataSet);
}).catch(function(err){
    console.error(err);
});

var options = {};
var show = false;

$('#fullpage').fadeOut(1000);
$('.right').hide();
$('#timeline,#timeline-add').show();

$('#timeline-add').click(function () {
    $('#timeline-form').show();

    if(show) {
        var date = $('#date').val();
        var title = $('#title').val();
        var text = $('#text').val();

        var year, month, day;

        if(date && date.trim().length > 0) {
            var result = date.match(/(\d{4})-(\d{2})-(\d{2})/);
            year = parseInt(result[1]);
            month = parseInt(result[2]);
            day = parseInt(result[3]);
        } else {
            alert('日期错误');
        }

        if(title && text && year && month && day && title.trim().length > 0 && text.trim().length > 0) {
            var obj = {
                'title': title.trim(),
                'text': text.trim(),
                'year': year,
                'month': month,
                'day': day
            };
            ref.push(obj).then(function (newRef) {
                console.info(newRef.toString());
                window.location.reload();
            }).catch(function (err) {
                alert('添加失败:' + err.code);
                console.info('添加失败', err.code, err);
            });
        } else {
            alert('内容不完整');
        }
    }

    show = true;
});