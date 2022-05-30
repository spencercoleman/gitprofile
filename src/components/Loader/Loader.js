import './Loader.css';

const Loader = ({theme}) => {
    return (
        <div className="Loader">
            <div className="lds-ring">
                <div style={{borderColor: `var(--${theme}-border-color) transparent transparent transparent`}}></div>
                <div style={{borderColor: `var(--${theme}-border-color) transparent transparent transparent`}}></div>
                <div style={{borderColor: `var(--${theme}-border-color) transparent transparent transparent`}}></div>
                <div style={{borderColor: `var(--${theme}-border-color) transparent transparent transparent`}}></div>
            </div>
        </div>
    );
}

export default Loader;