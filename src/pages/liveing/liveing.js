import React from 'react';
import videojs from 'video.js'
import videozhCN from 'video.js/dist/lang/zh-CN.json'; //播放器中文，不能使用.js文件
import 'video.js/dist/video-js.css';  //样式文件注意要加上
import 'videojs-flash';  //如果要播放RTMP要使用flash 需要先npm i videojs-flash
import './liveing.scss'

export default class Liveing extends React.Component {
  componentDidMount() {

    const videoJsOptions = {
      autoplay: true,  //自动播放
      language: 'zh-CN',
      controls: true,  //控制条
      preload: 'auto',  //自动加载
      errorDisplay: true,  //错误展示
      width: 500,  //宽
      height: 300,  //高
      // fluid: true,  //跟随外层容器变化大小，跟随的是外层宽度
      // controlBar: false,  // 设为false不渲染控制条DOM元素，只设置controls为false虽然不展示，但还是存在
      // textTrackDisplay: false,  // 不渲染字幕相关DOM
      userActions: {
        hotkeys: true  //是否支持热键
      },
      sources: [
        {
          src: 'rtmp://localhost/live/live',
          //src: 'http://localhost:8000/live/live.flv',
          //src: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8',
          //src: 'rtmp://58.200.131.2:1935/livetv/hunantv'
          //type: "rtmp/flv",  //类型可加可不加，目前未看到影响
          // type: 'video/mp4',
        }
      ]
    };

    // instantiate Video.js
    //这里的this.props是上级传进来的video的options
    this.player = videojs(this.videoNode, videoJsOptions, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
    videojs.addLanguage('zh-CN', videozhCN);

    // this.player.liveTracker.on('liveedgechange', () => {
    // console.log('跟随直播');
    // this.player.liveTracker.seekToLiveEdge();
    // });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>  {/*这个带有属性的div目前没看到作用，可以去掉*/}
          <video ref={node => this.videoNode = node} className="video-js"></video>
        </div>
      </div>
    )
  }
}