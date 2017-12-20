var json = {
    "timeline": {
        "headline": "The Main Timeline Headline Goes here",
        "type": "default",
        "text": "<p>Intro body text goes here, some HTML is ok</p>",
        "asset": {
            "credit": "Credit Name Goes Here",
            "caption": "Caption text goes here"
        },
        "date": [
            {
                "startDate": "2011,12,10",
                "endDate": "2011,12,10",
                "headline": "Headline Goes Here",
                "text": "<p>Body text goes here, some HTML is OK</p>",
                "tag": "This is Optional"
            },
            {
                "startDate": "2011,12,11",
                "endDate": "2011,12,11",
                "headline": "Headline Goes Here",
                "text": "<p>Body text goes here, some HTML is OK</p>",
                "tag": "This is Optional"
            },
            {
                "startDate": "2011,12,12",
                "endDate": "2011,12,12",
                "headline": "Headline Goes Here",
                "text": "<p>Body text goes here, some HTML is OK</p>",
                "tag": "This is Optional"
            },
            {
                "startDate": "2011,12,13",
                "endDate": "2011,12,13",
                "headline": "Headline Goes Here",
                "text": "<p>Body text goes here, some HTML is OK</p>",
                "tag": "This is Optional"
            }
        ]
    }
};

$('#fullpage').hide();
$('.right').hide();
$('#timeline').show();

createStoryJS({
    type: 'timeline',
    height: '600',
    source: json,
    embed_id: 'timeline',
    lang: 'zh-cn',
    font: 'BreeSerif-OpenSans'
});