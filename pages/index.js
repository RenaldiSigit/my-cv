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
          style={{ backgroundImage: `url(${web.dbWeb[0].img})` }}
        />
        <main className="content-wrapper">
          <header className="white-text-container section-container">
            <div className="text-center">
              <h1>{web.dbWeb[1].title}</h1>
              <p>{web.dbWeb[1].desc}</p>
              <p>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[1].sosmed.item[0].url}
                >
                  <i className={web.dbWeb[1].sosmed.item[0].icon} />
                </a>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[1].sosmed.item[1].url}
                  title
                >
                  <i className={web.dbWeb[1].sosmed.item[1].icon} />
                </a>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[1].sosmed.item[2].url}
                  title
                >
                  <i className={web.dbWeb[1].sosmed.item[2].icon} />
                </a>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[1].sosmed.item[3].url}
                  title
                >
                  <i className={web.dbWeb[1].sosmed.item[3].icon} />
                </a>
                <a
                  className="fa-icon fa-icon-2x"
                  href={web.dbWeb[1].sosmed.item[4].url}
                  title
                >
                  <i className={web.dbWeb[1].sosmed.item[4].icon} />
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
                    <h2>{web.dbWeb[2].Tittle}</h2>
                    <div className="row">
                      <div className="col-md-4">
                        <p>
                          <img
                            src={web.dbWeb[2].img}
                            className="img-responsive"
                            alt
                          />
                        </p>
                      </div>
                      <div className="col-md-8">
                        <p>{web.dbWeb[2].Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block">
                    <h2>{web.dbWeb[3].name}</h2>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="language-experience">
                          <h3 className="h5">
                            {web.dbWeb[3].items[0].name}{" "}
                            <small>{web.dbWeb[3].items[0].desc}</small>
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="language-experience">
                          <h3 className="h5">
                            {web.dbWeb[3].items[1].name}{" "}
                            <small>{web.dbWeb[3].items[1].desc}</small>
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="language-experience">
                          <h3 className="h5">
                            {web.dbWeb[3].items[2].name}{" "}
                            <small>{web.dbWeb[3].items[2].desc}</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block">
                    <h2>{web.dbWeb[4].name}</h2>
                    <div
                      id="carousel-example-generic"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      {/* Wrapper for slides */}
                      <div className="carousel-inner" role="listbox">
                        <div className="item active">
                          <img
                            src={web.dbWeb[4].slider[0].url}
                            className="img-responsive"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h3 className="h5">
                              {web.dbWeb[4].slider[0].title}
                            </h3>
                            <p>{web.dbWeb[4].slider[0].date}</p>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            src={web.dbWeb[4].slider[1].url}
                            className="img-responsive"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h3 className="h5">
                              {web.dbWeb[4].slider[1].title}
                            </h3>
                            <p>{web.dbWeb[4].slider[1].date}</p>
                          </div>
                        </div>
                        <div className="item">
                          <img
                            src={web.dbWeb[4].slider[2].url}
                            className="img-responsive"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h3 className="h5">
                              {web.dbWeb[4].slider[2].title}
                            </h3>
                            <p>{web.dbWeb[4].slider[2].date}</p>
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
                    <h2>{web.dbWeb[5].name}</h2>
                    <div className="row">
                      <div className="col-md-3">
                        <p className="social-buttons">
                          <a href={web.dbWeb[5].item[0].url} title>
                            <span className="social-round-icon fa-icon">
                              <i className="fa fa-twitter" />
                            </span>
                            {web.dbWeb[5].item[0].userAcc}
                          </a>
                        </p>
                      </div>
                      <div className="col-md-3">
                        <p className="social-buttons">
                          <a href={web.dbWeb[5].item[1].url} title>
                            <span className="social-round-icon fa-icon">
                              <i className="fa fa-linkedin" />
                            </span>
                            {web.dbWeb[5].item[1].userAcc}
                          </a>
                        </p>
                      </div>
                      <div className="col-md-3">
                        <p className="social-buttons">
                          <a href={web.dbWeb[5].item[2].url} title>
                            <span className="social-round-icon fa-icon">
                              <i className="fa fa-github" />
                            </span>
                            {web.dbWeb[5].item[2].userAcc}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block">
                    <h2>{web.dbWeb[6].Title}</h2>
                    <form action className="reveal-content">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder={web.dbWeb[6].form[0].placeholder}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder={web.dbWeb[6].form[1].placeholder}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder={web.dbWeb[6].form[2].placeholder}
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className=" btn btn-primary">
                          {web.dbWeb[6].ButtonForm.value}
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
                <p>{web.dbWeb[7].name}</p>
                <p>{web.dbWeb[7].value}</p>
                <p>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[1].sosmed.item[0].url}
                  >
                    <i className={web.dbWeb[1].sosmed.item[0].icon} />
                  </a>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[1].sosmed.item[1].url}
                    title
                  >
                    <i className={web.dbWeb[1].sosmed.item[1].icon} />
                  </a>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[1].sosmed.item[2].url}
                    title
                  >
                    <i className={web.dbWeb[1].sosmed.item[2].icon} />
                  </a>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[1].sosmed.item[3].url}
                    title
                  >
                    <i className={web.dbWeb[1].sosmed.item[3].icon} />
                  </a>
                  <a
                    className="fa-icon fa-icon-2x"
                    href={web.dbWeb[1].sosmed.item[4].url}
                    title
                  >
                    <i className={web.dbWeb[1].sosmed.item[4].icon} />
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
