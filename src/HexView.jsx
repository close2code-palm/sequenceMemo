const HexView = props => {
    const symbols = props.hexStr.split('')
    return(<div className="view-wrapper">
        {symbols.map((symbol, index) => (
            <span className="m-4" key={index}>{symbol}</span>
          )
        )}
    </div>)
}

export default HexView;
