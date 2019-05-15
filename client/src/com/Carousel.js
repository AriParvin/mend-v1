import React, { Component } from 'react';
import {
     Carousel,
     CarouselItem,
     CarouselControl,
     CarouselIndicators,
     CarouselCaption
} from 'reactstrap';

const items = [
     {
          title: 'Step 1',
          src: 'https://i.postimg.cc/Gh9SCpcJ/Firststeptofixhole.png',
          caption: 'Turn your sock inside out and insert the darning egg into the sock, centering it on the hole.Tighten the sock fabric around it a bit, not stretching it, but just enough that the fabric stays fairly taut.'
     },
     {
          title: 'Step 2',
          src: 'https://i.postimg.cc/kGGwqjdX/Secondsteptofixhole.png',
          caption: `Run stitches horizontally across until you are about 1/2" on the other side of the hole. If there is no sock fabric to stitch to, then just make longer stitches, from one side across to the other. Continue, going back and forth, until you've reached the top of the hole.`

     },
     {
          title: 'Step 3',
          src: 'https://i.postimg.cc/FRDGMM8B/Thirdsteptofixhole.png',
          caption: `Once you've reached the top of the hole, turn your sock 90 degrees, and now run stitches from the top to the bottom, which will create a weaved effect. Tie off the thread and trim any extras, turn your sock right side in and get ready for some toasty warm toes!
`

     }
];

export class CarouselBox extends Component {
     constructor(props) {
          super(props);
          this.state = {
               activeIndex: 0,
               items: this.props.steps
          };
          this.next = this.next.bind(this);
          this.previous = this.previous.bind(this);
          this.goToIndex = this.goToIndex.bind(this);
          // this.onExiting = this.onExiting.bind(this);
          // this.onExited = this.onExited.bind(this);
     }

     // onExiting() {
     //      this.animating = true;
     // }

     // onExited() {
     //      this.animating = false;
     // }



     next() {
          // if (this.animating) return;
          // const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
          // this.setState({ activeIndex: nextIndex });
     }

     previous() {
          if (this.animating) return;
          const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
          this.setState({ activeIndex: nextIndex });
     }

     goToIndex(newIndex) {
          if (this.animating) return;
          this.setState({ activeIndex: newIndex });
     }

     render() {
          const { activeIndex } = this.state;

          const slides = items.map((item) => {
               return (
                    <CarouselItem
                         onExiting={this.onExiting}
                         onExited={this.onExited}
                         key={item.src}
                    >
                         <h1>{item.title}</h1>
                         <img src={item.src} alt={item.altText} />

                         <p>{item.caption}</p>
                    </CarouselItem>
               );
          });

          return (
               <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
               >
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
               </Carousel>
          );
     }
}


export default CarouselBox;
