import * as React from 'react';

export interface IHelloProps { compiler: string; framework: string; }

export const Hello: React.FC<IHelloProps> = (props) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
