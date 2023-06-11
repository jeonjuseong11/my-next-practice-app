import fetch from 'isomorphic-unfetch';

const name = ({ user }) => {
  const username = user && user.name; //user값이 undefined 일 수 있기 때문
  return <div>{username}</div>;
};

name.getInitialProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return {};
  }
};
export default name;
