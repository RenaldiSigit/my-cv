import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ web }) {
  console.log(web);
  return (
    <>
      <div>
        <div
          className="background-color-layer"
          style={{ backgroundImage: `url(${web.dbWeb[0].home.img})` }}
        />
        <main className="content-wrapper">
          <header className="white-text-container section-container">
            <div className="text-center">
              <h1>{web.dbWeb[0].HeadTitle.title}</h1>
              <p>{web.dbWeb[0].HeadTitle.desc}</p>
              <p>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[0].HeadTitle.sosmed.item[0].url}
                >
                  <i className={web.dbWeb[0].HeadTitle.sosmed.item[0].icon} />
                </a>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[0].HeadTitle.sosmed.item[0].url}
                  title
                >
                  <i className={web.dbWeb[0].HeadTitle.sosmed.item[0].icon} />
                </a>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[0].HeadTitle.sosmed.item[2].url}
                  title
                >
                  <i className={web.dbWeb[0].HeadTitle.sosmed.item[2].icon} />
                </a>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[0].HeadTitle.sosmed.item[3].url}
                  title
                >
                  <i className={web.dbWeb[0].HeadTitle.sosmed.item[3].icon} />
                </a>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[0].HeadTitle.sosmed.item[4].url}
                  title
                >
                  <i className={web.dbWeb[0].HeadTitle.sosmed.item[4].icon} />
                </a>
              </p>
            </div>
          </header>
          {/* Add your site or app content here */}
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="card">
                  <div className="card-block">
                    <h2>{web.dbWeb[0].AboutMe.Tittle}</h2>
                    <div className="row">
                      <div className="col-md-4">
                        <p>
                          <img
                            src={web.dbWeb[0].AboutMe.img}
                            className="img-responsive"
                            alt
                          />
                        </p>
                      </div>
                      <div className="col-md-8">
                        <p>{web.dbWeb[0].AboutMe.Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block">
                    <h2>{web.dbWeb[0].Language.name}</h2>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="language-experience">
                          <h3 className="h5">
                            {web.dbWeb[0].Language.items[0].name}{" "}
                            <small>{web.dbWeb[0].Language.items[0].desc}</small>
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="language-experience">
                          <h3 className="h5">
                            {web.dbWeb[0].Language.items[1].name}{" "}
                            <small>{web.dbWeb[0].Language.items[1].desc}</small>
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="language-experience">
                          <h3 className="h5">
                            {web.dbWeb[0].Language.items[2].name}{" "}
                            <small>{web.dbWeb[0].Language.items[2].desc}</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block">
                    <h2>{web.dbWeb[0].Projects.name}</h2>
                    <div
                      id="carousel-example-generic"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      {/* Wrapper for slides */}
                      <div className="carousel-inner" role="listbox">
                        <div className="item active">
                          <img
                            src={web.dbWeb[0].Projects.slider[0].url}
                            className="img-responsive"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h3 className="h5">
                              {web.dbWeb[0].Projects.slider[0].title}
                            </h3>
                            <p>{web.dbWeb[0].Projects.slider[0].date}</p>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            src={web.dbWeb[0].Projects.slider[1].url}
                            className="img-responsive"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h3 className="h5">
                              {web.dbWeb[0].Projects.slider[1].title}
                            </h3>
                            <p>{web.dbWeb[0].Projects.slider[1].date}</p>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            src={web.dbWeb[0].Projects.slider[2].url}
                            className="img-responsive"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h3 className="h5">
                              {web.dbWeb[0].Projects.slider[2].title}
                            </h3>
                            <p>{web.dbWeb[0].Projects.slider[2].date}</p>
                          </div>
                        </div>
                      </div>
                      {/* Indicators */}
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carousel-example-generic"
                          data-slide-to={0}
                          className="active"
                        />
                        <li
                          data-target="#carousel-example-generic"
                          data-slide-to={1}
                        />
                        <li
                          data-target="#carousel-example-generic"
                          data-slide-to={2}
                        />
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block">
                    <h2>{web.dbWeb[0].SocialNetwork.name}</h2>
                    <div className="row">
                      <div className="col-md-3">
                        <p className="social-buttons">
                          <a
                            href={web.dbWeb[0].SocialNetwork.item[0].url}
                            title
                          >
                            <span className="social-round-icon fa-icon">
                              <i className="fa fa-twitter" />
                            </span>
                            {web.dbWeb[0].SocialNetwork.item[0].userAcc}
                          </a>
                        </p>
                      </div>
                      <div className="col-md-3">
                        <p className="social-buttons">
                          <a
                            href={web.dbWeb[0].SocialNetwork.item[1].url}
                            title
                          >
                            <span className="social-round-icon fa-icon">
                              <i className="fa fa-linkedin" />
                            </span>
                            {web.dbWeb[0].SocialNetwork.item[1].userAcc}
                          </a>
                        </p>
                      </div>
                      <div className="col-md-3">
                        <p className="social-buttons">
                          <a
                            href={web.dbWeb[0].SocialNetwork.item[2].url}
                            title
                          >
                            <span className="social-round-icon fa-icon">
                              <i className="fa fa-github" />
                            </span>
                            {web.dbWeb[0].SocialNetwork.item[2].userAcc}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block">
                    <h2>{web.dbWeb[0].contact.Title}</h2>
                    <form action className="reveal-content">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder={web.dbWeb[0].contact.form[0].placeholder}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder={web.dbWeb[0].contact.form[1].placeholder}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder={web.dbWeb[0].contact.form[2].placeholder}
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className=" btn btn-primary">
                          {web.dbWeb[0].contact.ButtonForm.value}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer-container white-text-container text-center">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                {/* <p>
          <img src="./assets/images/mashup-icon.svg" alt />
        </p> */}
                <p>{web.dbWeb[0].footer.name}</p>
                <p>{web.dbWeb[0].footer.value}</p>
                <p>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[0].HeadTitle.sosmed.item[0].url}
                  >
                    <i className={web.dbWeb[0].HeadTitle.sosmed.item[0].icon} />
                  </a>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[0].HeadTitle.sosmed.item[0].url}
                    title
                  >
                    <i className={web.dbWeb[0].HeadTitle.sosmed.item[0].icon} />
                  </a>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[0].HeadTitle.sosmed.item[2].url}
                    title
                  >
                    <i className={web.dbWeb[0].HeadTitle.sosmed.item[2].icon} />
                  </a>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[0].HeadTitle.sosmed.item[3].url}
                    title
                  >
                    <i className={web.dbWeb[0].HeadTitle.sosmed.item[3].icon} />
                  </a>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[0].HeadTitle.sosmed.item[4].url}
                    title
                  >
                    <i className={web.dbWeb[0].HeadTitle.sosmed.item[4].icon} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const localhost = "https://database-cv-sigit.herokuapp.com/";
  const dataResponse = await fetch(localhost);
  const dataJson = await dataResponse.json();

  return {
    props: {
      web: dataJson,
    },
  };
}
