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
import {ModalImageData} from "../../pageElements/Modals/Data/ModalImageData";
import ModalImage from "../../pageElements/Modals/ModalImage";

const scrollForMore = () => {
    scroller.scrollTo('moreScrollToElement', {
        duration: 1500,
        delay: 100,
        smooth: true,            
        offset: -100, 
    });
};

export default () => {
    const [modalImage, setModalImage] = useState<ModalImageData|null>(null);

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

        <ModalImage data={modalImage} onClose={() => setModalImage(null)}></ModalImage>

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
                        <div className="vertical-timeline-image-container" onClick={() => setModalImage(
                            new ModalImageData('//picsum.photos/600/400', 'Eintrag 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'))
                        }>
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
                        <div className="vertical-timeline-image-container" onClick={() => setModalImage(
                            new ModalImageData('//picsum.photos/600/400', 'Eintrag 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'))
                        }>
                            <img src="//picsum.photos/600/300"/>
                        </div>
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
                        <div className="vertical-timeline-image-container" onClick={() => setModalImage(
                            new ModalImageData('//picsum.photos/600/400', 'Eintrag 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'))
                        }>
                            <img src="//picsum.photos/700/400"/>
                        </div>
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
