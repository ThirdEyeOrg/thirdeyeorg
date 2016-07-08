import React from "react";
export default class SVG extends React.Component {
  render() {
    let width = this.props.width ? this.props.width : "342";
    let height = width;
    let viewBox = `0 0 ${342} ${320}`

    return <svg width={width} height={height} viewBox={viewBox} xmlns={this.props.xmlns ? this.props.xmlns : "http://www.w3.org/2000/svg"} {...this.props}><title>0</title><path d="M256.406 147.512C256.023 84.74 221.771 29.999 171 .635 120.229 29.999 85.977 84.74 85.594 147.512 34.534 177.042.181 232.237.181 295.455c0 .355.002.71.004 1.064 25.124 14.53 54.294 22.846 85.406 22.846 31.113 0 60.284-8.317 85.409-22.848 25.125 14.531 54.296 22.848 85.41 22.848 31.111 0 60.28-8.316 85.405-22.846.002-.355.004-.71.004-1.064 0-63.218-34.353-118.413-85.413-147.943zM171 252.514c31.447 0 56.94-25.493 56.94-56.94s-25.493-56.94-56.94-56.94-56.94 25.493-56.94 56.94 25.493 56.94 56.94 56.94z" fill="#000" fillRule="evenodd" /></svg>;
  }

}
