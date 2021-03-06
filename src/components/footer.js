import React, { Fragment } from 'react';

function Footer(props) {
    return (
        <div>
            {props.device !== 'mobile' &&
                <div className="footer">
                    <div className="footerText">
                        版權所有 富邦人壽
                    <br /><br />
                    最佳瀏覽狀態請使用：Chrome77, Safari 13, Firefox69版本以上
                    </div>
                </div>
            }
        </div>
    );
}

export default Footer;