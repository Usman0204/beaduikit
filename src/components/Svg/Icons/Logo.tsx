import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
     <image id="mobile-logo" width="32" height="32" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgB7VfRccIwDBU9BmCDphNAJ2g6QekEpBMAE0AnACYAJiidADoBdIJkA9jAlcjzReQMiQPpF+9Ol9jI0rMsyYHojitgjOmzxCwD+k+wwxbL3JxCxi2qG+wkxK5dkPmA6gJCXgajsjYfyA/PJfXqOwoJMcv2VkfQzBmP1DBpNBobx5oeS4fcCFi6LNP8D5I7WCfR2bHtlcw3lMIcBhJMyYINy5CVD0ovht45bFj/VemLwy84/mERW20Zaz1RNOo9wnMBYlovLkjAdU5/zjLN2W1ZfzoCa+w+OP7A7MBedvxko+ATAazfY30CHweI+PjQTIVVZHJdDQnXUeMOEjFS0ZBnF/NaN3RE5OjDlG1aYgAJpIkO4CwEAUtqrA27COTh2wcEssMJy0BVScISsUgDCskDTfKEOOVdvfPrRnW8PsuC0tJd+djzjgAy+oXS0hpjWp5SLW3j0YbLEvglhBVdrqfmbBYPKT0amY9M1g3fKOsr1YDkipGMe0k0zBv7tDoYD6C/Nbe8HZHRgRo7CSjSnTKlVioJUYYSejG85ERbXNCNKA294JvS5KxOAEkVscxgMClYsqO00wUsI17/yIQ/qQrQ3WJXKC8dgdIJkDfhOR9FVRCyzPRt6APp//xY0vnru5CA7LySc4UDVf1CQkmtHfNS61u826NwhtpeVFSRQAsGRrYEUY57a1QRsPUfqrUTS7QykEgLk2Gbux1PPmRMdkULybm55X+FS9VQpFcbZKd0xxX4A8e5wbw5oK3GAAAAAElFTkSuQmCC"/>

    </Svg>
  );
};

export default Icon;
