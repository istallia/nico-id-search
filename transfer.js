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
	/* IDを検出 */
	let work_id = details.url.match(/\b(sm|so|lv|nc|td|co|gm|nq)\d{1,12}/);
	console.log(details.url, work_id);
	if (work_id){
		work_id = work_id[0];
	} else {
		return {};
	}
	/* 対応したページに飛ばす */
	const url = NICONICO_URLS[work_id.slice(0,2)].replace('%id%', work_id);
	return {redirectUrl : 'https://'+url};
}, {
	urls : [
		"https://www.nicovideo.jp/search/*",
		"https://www.nicovideo.jp/tag/*",
		"https://seiga.nicovideo.jp/search/*",
		"https://live.nicovideo.jp/search*",
		"https://commons.nicovideo.jp/search/keyword/*",
		"https://3d.nicovideo.jp/search*",
		"https://com.nicovideo.jp/search/*",
		"https://game.nicovideo.jp/atsumaru/search/word/*",
		"https://q.nicovideo.jp/search*"
	]
}, ['blocking']);
