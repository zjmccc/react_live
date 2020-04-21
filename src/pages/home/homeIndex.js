import React from 'react';
import './homeIndex.scss'
import { Avatar } from "antd";
import liveBriefIntroductionItemImg from "@img/webpdy1.webp";
export default class HomeIndex extends React.Component {
  render() {
    return (
      <div className="homeIndexBox">
        <div className="liveBriefIntroductionBox">
          {['', '', '',].map(() => {
            return (
              <div className="liveBriefIntroductionItem animated  pulse" onClick={this.props.history.push('home')}>
                <img src={liveBriefIntroductionItemImg}></img>
                <div className="liveBriefIntroductionItemContent">
                  <Avatar size={48} src={liveBriefIntroductionItemImg} />
                  <div className="liveBriefIntroductionItemDetails">
                    <div>
                      <span>1千3</span>
                      <span>阿达</span>
                    </div>
                    <div>
                      <span>阿瑟的</span>
                      <span>啊实打实</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    )
  }
}

