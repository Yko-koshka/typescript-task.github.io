import { type PropsWithChildren } from 'react';

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

const Component = ({ name, id, children }: ComponentProps) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>id: {id}</h2>
      {children}
    </>
  );
};
export default Component;
