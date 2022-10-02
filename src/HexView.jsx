const HexView = props => {
    const symbols = props.hexStr.split('')
    return(<div>
        {symbols.map((symbol, index) => (
            <span key={index}>{symbol}</span>
          )
        )}
    </div>)
}

export default HexView;
