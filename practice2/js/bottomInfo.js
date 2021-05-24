import css from 'css/main.css'
import js from './getGitDate';

document.write(Test1);

document.write(
    <div className="bottomInfo">
        <div className="leftSide">
            <div className="infoHeader"><b>General Site Information</b></div>
            <div className="infoText">
                <p className="infoTextHeader">Last Website Update: </p>
                <script src="js/getGitDate.js"></script>
                <div id="gitTime"></div>
                <p className="infoTextHeader">Author: </p>
                <p>Not Willing to Say at This Time</p>
            </div>
        </div>

        <div className="centerSide">
            <div className="infoHeader"><b>Links</b></div>
        </div>

        <div className="rightSide">
            <div className="infoHeader"><b>TODO</b></div>
        </div>
    </div>
);