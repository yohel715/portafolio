import React from "react";

const Contanct = () => {
  return (
    <div className="contact_content">
      <p className="contact_subtitle text-center m-1">Contáctame</p>
      <div className="contact_headder">
        <h1 class="contact_title text-center m-2">
          ¡Creemos un nuevo proyecto!
        </h1>
      </div>
      <div className="contact_email">
        <a href="mailto:yohel715@gmail.com" class="btn btn_contact mr-3">
          Escríbeme
        </a>
      </div>
      <div className="row_contact">
        <div className="column contact_info">
          <ul className="contact_list">
            <li>
              <a
                href="https://www.facebook.com/yohel.urena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  class="iconify"
                  data-icon="brandico:facebook-rect"
                  data-inline="false"
                  data-width="38"
                  data-height="38"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yohel715/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  class="iconify"
                  data-icon="simple-icons:instagram"
                  data-inline="false"
                  data-width="38"
                  data-height="38"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yohel715"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  class="iconify"
                  data-icon="il:twitter"
                  data-inline="false"
                  data-width="38"
                  data-height="38"
                ></span>
              </a>
            </li>
          </ul>
          <div className="contact_media_list ml-4">
            <a
              href="https://www.facebook.com/yohel.urena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="contact_media_name instagram">Yohel Ureña Mora</h3>
              <br />
            </a>
            <a
              href="https://www.instagram.com/yohel715/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="contact_media_name twitter">Yohel715</h3>
              <br />
            </a>
            <a
              href="https://twitter.com/yohel715"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="contact_media_name">@Yohel715</h3>
              <br />
            </a>
          </div>
        </div>
        <div className="column contact_info">
          <ul className="contact_list">
            <li>
              <a
                href="mailto:yohel715@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  class="iconify"
                  data-icon="clarity:email-solid"
                  data-inline="false"
                  data-width="38"
                  data-height="38"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yohel-ure%C3%B1a-mora-b8011b191/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  class="iconify"
                  data-icon="brandico:linkedin-rect"
                  data-inline="false"
                  data-width="38"
                  data-height="38"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/yohel715"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  class="iconify"
                  data-icon="ant-design:dribbble-outlined"
                  data-inline="false"
                  data-width="38"
                  data-height="38"
                ></span>
              </a>
            </li>
          </ul>
          <div className="contact_media_list ml-4">
            <a
              href="mailto:yohel715@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="contact_media_name gmail">yohel715@gmail.com</h3>
              <br />
            </a>
            <a
              href="https://www.linkedin.com/in/yohel-ure%C3%B1a-mora-b8011b191/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="contact_media_name linkedin">Yohel Ureña Mora</h3>
              <br />
            </a>
            <a
              href="https://dribbble.com/yohel715"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="contact_media_name dribbble">yohel715</h3>
              <br />
            </a>
          </div>
        </div>
      </div>
      <p className="contact_footer text-center">Alajuela, Costa Rica <br/> 2020</p>

    </div>
  );
};

export default Contanct;
