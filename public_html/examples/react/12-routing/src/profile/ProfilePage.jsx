import { FAKE_USER } from "../FakeData";

export function ProfilePage() {
  return (
    <>
      <h1>Profile</h1>
      <p>Here you can modify your profile, {FAKE_USER.name}!</p>
    </>
  );
}
