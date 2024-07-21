import Header from "./customHeader";

export default function BaseLayout({ children, currentUser }) {
    return (
      <div className="container">
        <Header currentUser={currentUser}></Header>
        {children}
      </div>
    );
  }