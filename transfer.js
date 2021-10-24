/* --- browserの読み込み --- */
if (typeof browser === 'undefined') browser = chrome;


/* --- 各ID接頭語に対するURLを定義 --- */
const NICONICO_URLS = {
	sm : 'www.nicovideo.jp/watch/%id%',
	so : 'www.nicovideo.jp/watch/%id%',
	lv : 'live.nicovideo.jp/watch/%id%',
	nc : 'commons.nicovideo.jp/material/%id%',
	td : '3d.nicovideo.jp/works/%id%',
	co : 'com.nicovideo.jp/community/%id%',
	gm : 'game.nicovideo.jp/atsumaru/games/%id%',
	nq : 'q.nicovideo.jp/watch/%id%'
};


/* --- 転送を行う --- */
browser.webRequest.onBeforeRequest.addListener(details => {
	let work_id = details.url.match(/\b(sm|so|lv|nc|td|co|gm|nq)\d{1,12}/);
	if (work_id) work_id = work_id[0];
}, {
	urls : [
		"https://www.nicovideo.jp/search/*",
		"https://www.nicovideo.jp/tag/*",
		"https://seiga.nicovideo.jp/search/*",
		"https://live.nicovideo.jp/search",
		"https://commons.nicovideo.jp/search/keyword/*",
		"https://3d.nicovideo.jp/search",
		"https://com.nicovideo.jp/search/*",
		"https://game.nicovideo.jp/atsumaru/search/word/*",
		"https://q.nicovideo.jp/search"
	]
}, ['blocking']);
