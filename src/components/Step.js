import React, { Component } from 'react'
import Tour from 'reactour'
class Step extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTourOpen: true
        };
    };


    render() {
        const steps = [
            {
                selector: '[node="Dashboard"]',
                content: () => (
                    <div>
                      <div role="none">
                        <div>
                          <section>
                            <h3 className="fOyUs_bGBk blnAQ_bGBk blnAQ_dnfM blnAQ_drOs">
                              Hello, Thai Chuong!
                            </h3>
                            <p
                              wrap="normal"
                              letterSpacing="normal"
                              className="enRcg_bGBk enRcg_ycrn enRcg_eQnG"
                            >
                              We know getting your courses online quickly during this time is
                              priority. This quick tour will show you how to:
                            </p>
                            <ol>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="https://community.canvaslms.com/docs/DOC-13111-4152719738"
                                >
                                  Set up your Notifications
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="https://community.canvaslms.com/docs/DOC-18584-set-up-your-canvas-course-in-30-minutes-or-less"
                                >
                                  Get your Content online
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="https://community.canvaslms.com/docs/DOC-12687-41524130"
                                  className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                                >
                                  Learn more about Video Conferencing
                                </a>
                                <ul>
                                  <li>
                                    <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href="https://community.canvaslms.com/docs/DOC-23893"
                                      className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                                    >
                                      Zoom
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href="https://community.canvaslms.com/docs/DOC-18570-google-hangouts-meet-lti"
                                      className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                                    >
                                      Google Meet
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href="https://www.youtube.com/watch?v=zUXXeiRCFfY"
                                      className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                                    >
                                      Microsoft Teams
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ol>
                            <div className="tour-star-image" aria-hidden="true">
                              <img
                                src="https://du11hjcvx0uqb.cloudfront.net/br/dist/webpack-production/cafb6a6790be5cd5a6c8e14a0c8eb229.svg"
                                alt="star"
                              />
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  ),

            },
            {
                selector: '[node="Account"]',
                
                content: () => (
                    <div class="ascas">
                      <div role="none">
                        <div>
                          <span >
                            <span>
                              <button
                                cursor="pointer"
                                type="button"
                                tabIndex={0}
                                className="fOyUs_bGBk fOyUs_fKyb fOyUs_cuDs fOyUs_cBHs fOyUs_eWbJ fOyUs_fmDy fOyUs_eeJl fOyUs_cBtr fOyUs_fuTR fOyUs_cnfU fQfxa_bGBk"
                                style={{
                                  margin: 0,
                                  padding: 0,
                                  borderRadius: "0.25rem",
                                  borderWidth: 0,
                                  width: "auto",
                                  cursor: "pointer",
                                }}
                              ></button>
                            </span>
                          </span>
                          <section>
                            <h3 className="fOyUs_bGBk blnAQ_bGBk blnAQ_dnfM blnAQ_drOs">
                              Set Up Your Notifications
                            </h3>
                            <span className="fdaJD_bGBk">
                              Click on the account navigation button to access notification
                              preferences.
                            </span>
                            <p
                              wrap="normal"
                              letterSpacing="normal"
                              className="enRcg_bGBk enRcg_ycrn enRcg_eQnG"
                            >
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://community.canvaslms.com/docs/DOC-13111-4152719738"
                                className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                              >
                                Don't miss notifications from your students.
                              </a>
                            </p>
                            <iframe
                              title="Canvas Notifications Tutorial Video"
                              src="https://player.vimeo.com/video/75514816?title=0&byline=0&portrait=0"
                              width="100%"
                              height="277px"
                              frameBorder={0}
                              allow="autoplay; fullscreen"
                              allowFullScreen
                              style={{ marginTop: "1rem" }}
                            />
                          </section>
                        </div>
                      </div>
                    </div>
                  )
                
            },
            {
                selector: '[node="Courses"]',
                content: () => (
                    <div
                      tabIndex={-1}
                      className="reactour__helper reactour__helper--is-open css-1b4tx0c"
                      role="dialog"
                    >
                      <div role="none">
                        <div>
                          <section>
                            <h3 className="fOyUs_bGBk blnAQ_bGBk blnAQ_dnfM blnAQ_drOs">
                              Get Your Content Online Quickly
                            </h3>
                            <span className="fdaJD_bGBk">
                              Click on the courses navigation button to access your courses.
                            </span>
                            <p
                              wrap="normal"
                              letterSpacing="normal"
                              className="enRcg_bGBk enRcg_ycrn enRcg_eQnG"
                            >
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://community.canvaslms.com/docs/DOC-18584-set-up-your-canvas-course-in-30-minutes-or-less"
                                className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                              >
                                Set up your Canvas course in 30 minutes or less.
                              </a>
                            </p>
                            <iframe
                              title="Canvas Course Tutorial Video"
                              src="https://player.vimeo.com/video/69658934?title=0&byline=0&portrait=0"
                              width="100%"
                              height="277px"
                              frameBorder={0}
                              allow="autoplay; fullscreen"
                              allowFullScreen
                              style={{ marginTop: "1rem" }}
                            />
                          </section>
                        </div>
                      </div>
                    </div>
                  ),
            },
            {
                selector: '[node="Help"]',
                content: () => (
                    <div
                      tabIndex={-1}
                      className="reactour__helper reactour__helper--is-open css-1b4tx0c"
                      role="dialog"
                    >
                      <div role="none">
                        <div>
                          <section>
                            <h3 className="fOyUs_bGBk blnAQ_bGBk blnAQ_dnfM blnAQ_drOs">
                              Learn more about Video Conferencing
                            </h3>
                            <div className="fOyUs_bGBk" style={{ margin: "0.75rem 0px 0px" }}>
                              <ul>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://community.canvaslms.com/docs/DOC-23893"
                                    className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                                  >
                                    Zoom
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://community.canvaslms.com/docs/DOC-18570-google-hangouts-meet-lti"
                                    className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                                  >
                                    Google Meet
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.youtube.com/watch?v=zUXXeiRCFfY"
                                    className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                                  >
                                    Microsoft Teams
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://community.canvaslms.com/docs/DOC-12687-41524130"
                                    className="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"
                                  >
                                    More Video Conferencing Tools
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  ),
            },            
        ];
        return (
            <div>
                <Tour
                    steps={steps}
                    isOpen={this.state.isTourOpen}
                    onRequestClose={this.closeTour}
                    accentColor='#ba877c'
                    />
            </div>
        )
    }


}
export default Step