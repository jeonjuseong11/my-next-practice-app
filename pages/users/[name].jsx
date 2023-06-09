import Profile from '@/components/Profile';
import fetch from 'isomorphic-unfetch';

const name = ({ user }) => {
  if (!user) {
    return null; // user 정보가 없을 경우 에러 방지
  }
  return (
    <>
      <Profile user={user} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
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
    return { props: {} };
  }
};
export default name;
