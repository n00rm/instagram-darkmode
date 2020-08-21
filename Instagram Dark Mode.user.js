// ==UserScript==
// @name         Instagram Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A dark mode for Instagram
// @author       Norm
// @match        homepage
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

addGlobalStyle('._3Laht, .o64aR { background-color: #000000 !important; }'); //main background
addGlobalStyle('._lz6s { background-color: #2d2d2d !important; }'); //gray header
addGlobalStyle('.Di7vw { background: #3f3f3f !important; }'); //search bar background
addGlobalStyle('.Di7vw { border: solid 1px #3f3f3f !important; }'); //search bar border
addGlobalStyle('.pbgfb { color: #999999 !important; }'); //'Search' text
addGlobalStyle('.x3qfX { background-color: #202124 !important; }'); //search bar background after clicking
addGlobalStyle('.XTCLo { border: solid 1px #202124 !important; }'); //search bar border after clicking
addGlobalStyle('.fuqBx { background-color: #2d2d2d !important; }'); //search results background after clicking
addGlobalStyle('.JvDyy { background: #b4b4b5 !important; }'); //search result during mouse hover
addGlobalStyle('.Ap253 { color: #dbdbdb !important; }'); //handle text color in search result
addGlobalStyle('.Fy4o8 { color: #b4b4b5 !important; }'); //username text color in search result
addGlobalStyle('.L3NKy, a.L3NKy, a.L3NKy:visited { background-color: #b4b4b5 !important; }'); //'Log In' background
addGlobalStyle('a.tdiEy, a.tdiEy:visited { color: #b4b4b5 !important; }'); //'Sign Up'
addGlobalStyle('.-fzfL { border-color: #b4b4b5 !important; }'); //'Following' border color
addGlobalStyle('.-fzfL { color: #b4b4b5 !important; }'); //'Following' text color
addGlobalStyle('.KV-D4 { color: #dbdbdb !important; }'); //handle color
addGlobalStyle('.g47SY { color: #b4b4b5 !important; }'); //#posts, #followers, #following
addGlobalStyle('.-nal3, .-nal3:active, .-nal3:hover, .-nal3:visited { color: #dbdbdb !important; }'); //posts, followers, following
addGlobalStyle('._32eiM, ._32eiM:visited { color: #dbdbdb !important; }'); //'Followed by ____ + x more'
addGlobalStyle('.zwlfE { color: #dbdbdb !important; }'); //username color
addGlobalStyle('a.T-jvg, a.T-jvg:visited { color #b4b4b5 !important; }'); //'POSTS'
addGlobalStyle('a, a:visited { color: #b4b4b5 !important; }'); //'TAGGED'
addGlobalStyle('.T-jvg { border-top: 1px solid #999999 !important; }'); // line above 'POSTS'
addGlobalStyle('._3G4x7 { color: #b4b4b5 !important; }'); //'LANGUAGES'
addGlobalStyle('.DINPA { color: #b4b4b5 !important; }'); //'INSTAGRAM FROM FACEBOOK'
addGlobalStyle('.eXle2 { color: #b4b4b5 !important; }'); //text color of highlight names

//for pages with 'Requested'

addGlobalStyle ('._8A5w5, a._8A5w5, a._8A5w5:visited { border: 1px solid #b4b4b5 !important; color: #b4b4b5 !important; }'); //'Requested' border and 'Requested' text color
addGlobalStyle('._4Kbb_ { border: 1px solid #b4b4b5 !important; }'); //blank space border
addGlobalStyle('._4Kbb_ { background-color: #2d2d2d !important; }'); //blank space
addGlobalStyle('.tHaIX { background-color: #3f3f3f !important; }'); //lower blank space
addGlobalStyle('._41KYi { background: #2d2d2d !important; }'); //profile blank space
addGlobalStyle('._41KYi { border: 1px solid #b4b4b5 !important; }'); //profile space border
addGlobalStyle('.Qj3-a, .Qj3-a:visited { color: #b4b4b5 !important; }'); //profile space--handle color
addGlobalStyle('._7cyhW { color: #b4b4b5 !important; }'); //profile space--username color
addGlobalStyle('.L3NKy, a.L3NKy, a.L3NKy:visited { background-color: #b4b4b5 !important; }'); //profile space--follow button background
addGlobalStyle('.L3NKy, a.L3NKy, a.L3NKy:visited { border: #b4b4b5 !important; }'); //profile space--follow button border
addGlobalStyle('.L3NKy, a.L3NKy, a.L3NKy:visited { color: #b4b4b5 !important; }'); //profile space--follow text color
addGlobalStyle('.Rebts { color: #dbdbdb !important; }'); //'Suggestions For You'
addGlobalStyle('.VIsJD, .rkEop { color: #dbdbdb !important; }'); //'This Account is Private'

//annoying white line
addGlobalStyle('.Nd_Rl, .fx7hk { border-top: 1px solid #b4b4b5 !important; }'); // annoying white line

//for pages you have neither followed nor requested to follow

addGlobalStyle('.jIbKX, .m4t9r.jIbKX { background: #b4b4b5 !important; color: #2d2d2d !important; }'); //'Follow' + Drop down
addGlobalStyle('.jIbKX, .m4t9r.jIbKX { border-color: #b4b4b5 !important; }'); //border color of Follow and drop down

// // // // // // // // //

//for pages that result in 'Sorry, this page isn't available


addGlobalStyle('.-cx-PRIVATE-NavBar__root__ { background-color: #2d2d2d !important; border-bottom: 1px solid #2d2d2d !important; }'); //gray header
addGlobalStyle('.-cx-PRIVATE-NavBar__username__ { color: #b4b4b5 !important; }'); //username color

//fixes to 'Sorry, this...'
addGlobalStyle('h2 { color: #b4b4b5 !important; }'); //'Sorry, this page isn't available' text color

addGlobalStyle('.-cx-PRIVATE-ErrorPage__errorContainer__ { background-color: #3f3f3f !important; padding: 100px 40px 0; }'); //upper background
addGlobalStyle('.-cx-PRIVATE-Page__main__ { background-color: #3f3f3f !important; }'); //background color

addGlobalStyle('body { background-color: #3f3f3f !important; }'); //full background
addGlobalStyle('.-cx-PRIVATE-Footer__copyright__ { color: #b4b4b5 !important; }'); //2019 Instagram



//for individual posts
addGlobalStyle('.ltEKP .QBXjJ { border: 1px solid #3f3f3f !important; }'); //border color
addGlobalStyle('.ltEKP .QBXjJ { background-color: #2d2d2d !important; }'); //main background color
addGlobalStyle('.JyscU.ePUX4 .UE9AK { border-left: 1px solid #2d2d2d !important }'); //upper box--left border
addGlobalStyle('.JyscU.ePUX4 .eo2As { border-left: 1px solid #2d2d2d !important }'); //mid box-left border
addGlobalStyle('.JyscU .UE9AK { border-bottom: 1px solid #999999 !important }'); //upper box-bottom border
addGlobalStyle('.JyscU .Slqrh { border-top: 1px solid #999999 !important }'); //mid bottom box-top border
addGlobalStyle('.sH9wk { border-top: 1px solid #999999 !important }'); //bottom box-top border
addGlobalStyle ('span { color: #b4b4b5 !important }'); //text color in comment sections
//for opening posts on an IG page
addGlobalStyle('.JyscU.ePUX4 .UE9AK { background-color: #2d2d2d !important; }'); //upper box color

addGlobalStyle('.JyscU.ePUX4 .eo2As { background-color: #2d2d2d !important; }'); //general background color

//Main page
addGlobalStyle('.M9sTE { background-color: #2d2d2d !important; }'); //
addGlobalStyle('article._8Rm4L.M9sTE.L_LMM.SgTZ1.ePUX4 { border: 1px solid #3f3f3f !important; }');

addGlobalStyle('.DPiy6 { background-color: #2d2d2d !important; }'); //
addGlobalStyle('.b2rUF { border: 1px solid #3f3f3f !important; }');

//suggestions
addGlobalStyle('.NP414.ccgHY.GZkEI { background-color: #3f3f3f !important; border: #3f3f3f !important; }'); //background of suggestions pop up

//profile page
addGlobalStyle('.JLbVX { background-color: #3f3f3f !important; }'); //background to 'start capturing moments'
addGlobalStyle('.BvMHM.EzUlV { background-color: #3f3f3f !important; }'); //profile settings background
addGlobalStyle('.BvMHM { border: 1px solid #3f3f3f !important; }'); //border color of settings
addGlobalStyle('label { color: #84B3CD !important; }'); //text color
addGlobalStyle('h1.nsKSz { color: #637CDF !important; }'); //text color of header
addGlobalStyle('a.h-aRd.fuQUr { background-color: #1f1f1f!important; }'); //background color when highlighted
addGlobalStyle('.JLJ-B, .p7vTm { color: #72ABFC !important; }'); //text in boxes
addGlobalStyle('.RO68f { background-color: #4B718E !important; }'); //boxes background
addGlobalStyle('.j_2Hd { border: #4B718E !important; color: #3f3f3f !important; }'); //password color
addGlobalStyle('._lz6s { border-bottom: 1px solid #1f1f1f!important; }'); //bottom border of header


addGlobalStyle('body { color: #dbdbdb !important; }'); //full background
addGlobalStyle('._8UZ6e { background-color: #2d2d2d !important; }'); //
addGlobalStyle('.VideM { background-color: #2d2d2d !important; border: #4B718E !important; }'); //
addGlobalStyle('.eebAO { color: #dbdbdb !important; }');
addGlobalStyle('.L3NKy, a.L3NKy, a.L3NKy:visited  { color: #1f1f1f !important; }');
addGlobalStyle('._1XyCr { background-color: #2d2d2d !important; }'); //
addGlobalStyle('._6xe7A { background: #2d2d2d !important; }'); //
addGlobalStyle('._01UL2 { background: #2d2d2d !important; }'); //
addGlobalStyle('.YFq-A { color: #dbdbdb !important; }');
addGlobalStyle('.KV-D4 { color: #dbdbdb !important; }');
addGlobalStyle('.LpqwJ { background: #2d2d2d !important; }'); //
addGlobalStyle('.S-mcP { background-color: #2d2d2d !important; }'); //
addGlobalStyle('.m7ETg { color: #dbdbdb !important; }');
//addGlobalStyle('._4EzTm { background-color: #2d2d2d !important; }'); //
addGlobalStyle('.oYYFH { background-color: #000000 !important; }'); //
addGlobalStyle('.N9abW { background: #2d2d2d !important; }'); //
addGlobalStyle('.TOh1s { background: #2d2d2d !important; }'); //
addGlobalStyle('._8-yf5 { fill: #dbdbdb; }'); //
