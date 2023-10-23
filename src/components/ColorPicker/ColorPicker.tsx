import { useState } from "react";

type Props = {
  initialColor?: string
}

const ColorPicker = ({initialColor = "#fff"}: Props) => {
  
  const [color, setColor] = useState(initialColor);

  return (
    <>
      <div data-testid = "color-block-test" style={{"width": "500px", "height" : "500px", "marginBottom": "20px", "backgroundColor": color}}></div>
      <input data-testid = "color-input-test"  type="color" value={color} onChange={e => setColor(e.target.value)} />
    </>
  )
}

export default ColorPicker