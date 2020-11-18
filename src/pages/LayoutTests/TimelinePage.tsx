import React, {useState} from 'react';
import WhiteContainerSmall from '../../pageElements/Containers/WhiteContainerSmall';
import JumboTeaser from '../../pageElements/Containers/JumboTeaser';
import Button from '../../pageElements/Buttons/Button';
import { Element, scroller } from 'react-scroll';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Phone from '@material-ui/icons/Phone';
import Colors from '../../constants/Colors';
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const scrollForMore = () => {
    scroller.scrollTo('moreScrollToElement', {
        duration: 1500,
        delay: 100,
        smooth: true,            
        offset: -100, 
    });
};

export default () => {
    const [modalImage, setModalImage] = useState<string|null>(null);

    return <>
        <JumboTeaser backgroundImage="//picsum.photos/1000/1600">
            <div className="col-12 d-flex">
                <div className="mx-auto my-auto text-center">
                    <h2 className="mb-4" data-aos="fade-down" data-aos-duration="1000">Timeline Test</h2>
                    <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
                    <Button type="yellowFilled" className="mt-4" onClick={() => scrollForMore()}>
                        Timeline anzeigen
                    </Button>
                </div>
            </div>
        </JumboTeaser>

        <Modal open={modalImage !== null} onClose={() => setModalImage(null)}>
            <h2>Simple centered modal</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
            </p>
        </Modal>

        <WhiteContainerSmall className="pt-5 pb-5">
            <Element name="moreScrollToElement"></Element>
            <div className="mx-auto text-center">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2014"
                        iconStyle={{ background: Colors.GREY_COLOR, color: '#fff' }}
                        icon={<Phone />}
                    >
                        <h3 className="vertical-timeline-element-title">Eintrag 1</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
                        <p>
                            consetetur sadipscing elitr
                        </p>
                        <div className="vertical-timeline-image-container" onClick={() => setModalImage('x')}>
                            <img src="//picsum.photos/600/400"/>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2015"
                        iconStyle={{ background: Colors.GREY_COLOR, color: '#fff' }}
                        icon={<Phone />}
                    >
                        <h3 className="vertical-timeline-element-title">Eintrag 2</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
                        <p>
                            consetetur sadipscing elitr
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016"
                        iconStyle={{ background: Colors.GREY_COLOR, color: '#fff' }}
                        icon={<Phone />}
                    >
                        <h3 className="vertical-timeline-element-title">Eintrag 3</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
                        <p>
                            consetetur sadipscing elitr
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017"
                        iconStyle={{ background: Colors.GREY_COLOR, color: '#fff' }}
                        icon={<Phone />}
                    >
                        <h3 className="vertical-timeline-element-title">Eintrag 4</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
                        <p>
                            consetetur sadipscing elitr
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2018"
                        iconStyle={{ background: Colors.GREY_COLOR, color: '#fff' }}
                        icon={<Phone />}
                    >
                        <h3 className="vertical-timeline-element-title">Eintrag 5</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
                        <p>
                            consetetur sadipscing elitr
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2019"
                        iconStyle={{ background: Colors.GREY_COLOR, color: '#fff' }}
                        icon={<Phone />}
                    >
                        <h3 className="vertical-timeline-element-title">Eintrag 6</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
                        <p>
                            consetetur sadipscing elitr
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2020"
                        iconStyle={{ background: Colors.GREY_COLOR, color: '#fff' }}
                        icon={<Phone />}
                    >
                        <h3 className="vertical-timeline-element-title">Eintrag 7</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
                        <p>
                            consetetur sadipscing elitr
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </WhiteContainerSmall>
    </>;
}
