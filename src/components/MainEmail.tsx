import EmailActions from "./EmailActions";
import BodyEmail from "./BodyEmail";
import HeaderEmail from "./HeaderEmail";
import EmailTitle from "./EmailTitle";
import EmailToolBar from "./EmailToolBar";

function MainEmail() {
  return (
    <main className="email-view">
      <EmailToolBar />

      <article className="email-content">
        <EmailTitle />

        <HeaderEmail />

        <BodyEmail />

        <EmailActions />
      </article>
    </main>
  );
}

export default MainEmail;
