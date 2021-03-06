import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "音乐";
let icon = "../../images/applications/music.png";


function loadingMusic () {
    let musicTemplate = `
    <div class="main-left">
        <div class="title">在线音乐</div>
        <ul class="list">
            <li>推荐</li>
            <li>音乐馆</li>
            <li>视频</li>
            <li>电台</li>
        </ul>
        <div class="title">本地音乐</div>
        <ul class="list">
            <li>我喜欢</li>
            <li>本地歌曲</li>
            <li>下载歌曲</li>
            <li>播放历史</li>
            <li>已购音乐</li>
            <li>音乐网盘</li>
        </ul>
    </div>
    <div class="main-right">
        <input placeholder="搜索音乐"></input>
        <div class="title">我喜欢</div>
        <ul class="cate">
            <li>歌曲 92</li>
            <li>歌单 12</li>
            <li>专辑 15</li>
            <li>MV 45</li>
        </ul>
        <table class="music-list">
            <tr class="thead">
                <th>歌曲</th>
                <th>歌手</th>
                <th>专辑</th>
                <th>时长</th>
            </tr>
            <tr class="td">
                <td>干杯</td>
                <td>五月天</td>
                <td>步步</td>
                <td>04:49</td>
            </tr>
            <tr class="td">
                <td>同一种调调</td>
                <td>周杰伦</td>
                <td>叶惠美</td>
                <td>03:51</td>
            </tr>
            <tr class="td">
                <td>咸鱼</td>
                <td>五月天</td>
                <td>知足 最真杰作选</td>
                <td>04:09</td>
            </tr>
            <tr class="td">
                <td>干杯</td>
                <td>五月天</td>
                <td>步步</td>
                <td>04:49</td>
            </tr>
            <tr class="td">
                <td>同一种调调</td>
                <td>周杰伦</td>
                <td>叶惠美</td>
                <td>03:51</td>
            </tr>
            <tr class="td">
                <td>咸鱼</td>
                <td>五月天</td>
                <td>知足 最真杰作选</td>
                <td>04:09</td>
            </tr>
        </table>
        <div class="player"></div>
    </div>`;
    let music = opc.createNode("div", "main")
    music.innerHTML = musicTemplate
    return music;
}
export let music = {
    name: appName,
    icon: icon,

    start () {

        let hasOpenThisApp = opc.hasOpenAppList.filter( (item) => {
            return item.options.appName == appName;
        })

        if (hasOpenThisApp.length === 0) {
            let app = new App({
                appName: appName,
            });
            app.openApp(app)

            let musicWindow = document.querySelector(".音乐")
            musicWindow.append(loadingMusic())
        } else {
            console.log(`${appName}已经打开！`);
        }

    }
}