import * as React from "react"

const Star = ({ width, height, color, ...props }) => (
  <svg
    width={width ? width : 18}
    height={height ? height : 18}
    fill={color ? color : "0078FF"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.25.995 9.243.857h-.488L8.75.995l-.136 3.648A4.015 4.015 0 0 1 4.75 8.507l-3.755.137-.138.005v.489l.138.005 3.755.137a4.015 4.015 0 0 1 3.865 3.864l.136 3.648.005.138h.488l.005-.138.136-3.648A4.015 4.015 0 0 1 13.25 9.28l3.755-.137.138-.005v-.489l-.138-.005-3.755-.137a4.015 4.015 0 0 1-3.865-3.864L9.249.995ZM9 5.519a4.518 4.518 0 0 0 3.381 3.374A4.518 4.518 0 0 0 9 12.268a4.519 4.519 0 0 0-3.381-3.375A4.518 4.518 0 0 0 9 5.52Z"
      fill={color ? color : "0078FF"}
      stroke={color ? color : "0078FF"}
      strokeWidth={0.286}
    />
  </svg>
);

export default Star