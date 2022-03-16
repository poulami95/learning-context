import './Components.css';
import { ThemeContext, themes } from './theme-context';

export default function Container(props){
    const {
        contentType,
        details
    } = props
    return(
        <div className="container-outer-wrapper">
            <ThemeContext.Consumer>
            {(theme)=>(
            <div className="container-inner-wrapper" style={{color:theme.color, background:theme.background}}>
                <div className="container-content-type-wrapper">
                    {contentType}
                </div>
                <div className="container-content-details-wrapper">
                    {details}
                </div>
            </div>
            )}
            </ThemeContext.Consumer>
        </div>
    )
}