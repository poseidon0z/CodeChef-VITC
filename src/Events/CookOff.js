import React from "react";
import "../Styles/Events.css";
import CookOffImg from "../Asstes/Cook-Off-2024.png";
import ItsCooking from "../Asstes/itsCooking.png";
import Day1 from "../Asstes/day1.JPG";
import CarouselTemp from "../Components/Carousel";
import CookOffImg1 from "../Asstes/CookOff2024/img1.JPG";
import CookOffImg2 from "../Asstes/CookOff2024/img2.JPG";
import CookOffImg3 from "../Asstes/CookOff2024/img3.JPG";
import CookOffImg4 from "../Asstes/CookOff2024/img4.JPG";
import CookOffImg5 from "../Asstes/CookOff2024/img5.JPG";
import CookOffImg6 from "../Asstes/CookOff2024/img6.JPG";
import CookOffImg7 from "../Asstes/CookOff2024/img7.JPG";
import CookOffImg8 from "../Asstes/CookOff2024/img8.JPG";
import CookOffImg9 from "../Asstes/CookOff2024/img9.JPG";
import CookOffImg10 from "../Asstes/CookOff2024/img10.JPG";
import CookOffImg11 from "../Asstes/CookOff2024/img11.JPG";
import CookOffImg12 from "../Asstes/CookOff2024/img12.JPG";

const CookOff = () => {
  const imgArr = [
    CookOffImg1,
    CookOffImg2,
    CookOffImg3,
    CookOffImg4,
    CookOffImg5,
    CookOffImg6,
    CookOffImg7,
    CookOffImg8,
    CookOffImg9,
    CookOffImg10,
    CookOffImg11,
    CookOffImg12,
  ];
  return (
    <div className="event">
      <div className="event-heading my-3">
        <h1 className="text-center">Cook Off - 2024</h1>
      </div>
      <div className="event-img text-center">
        <img src={CookOffImg} alt="Cook Off 2024 Banner" />
      </div>
      <div className="event-content px-4">
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          inventore quos beatae molestias, incidunt error consequuntur? Fugit
          aut saepe modi hic in obcaecati blanditiis magnam quasi. Dolorum
          placeat ea odio consequatur beatae dolorem esse sunt, voluptatem
          inventore cum harum alias consequuntur rem dicta impedit ipsum
          laudantium. Natus, optio ipsum eaque a dolorum atque consequuntur
          asperiores quidem ut quo odio rem vitae dignissimos alias eos impedit
          et tempore voluptatem. Nobis earum eos in eligendi corrupti provident
          facilis? Placeat, sequi delectus? Sapiente facilis asperiores velit
          officia ab error, doloremque odio vero, perferendis, ipsum
          consequuntur magnam quae a rem. Sequi quidem voluptatibus tenetur?
        </p>
        <div className="event-col-divider">
          <div>
            <h3>Pre-Planning</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              sequi alias laboriosam voluptatem rerum voluptas illum distinctio!
              Quidem tempora quasi suscipit ipsum, voluptate, soluta quis est
              autem nostrum aliquid error molestiae eius excepturi! Non quas
              obcaecati delectus blanditiis similique quaerat, officia minus
              repudiandae eligendi mollitia porro ipsum placeat corporis sequi
              velit ducimus doloribus magni temporibus facilis perferendis modi!
              Suscipit veritatis illum modi fugit sint cupiditate aliquam. In
              maxime sunt ab molestias magni aperiam exercitationem distinctio,
              quia nesciunt quibusdam assumenda voluptate voluptatibus autem
              delectus quisquam alias praesentium dolorum natus, ut earum
              impedit temporibus. Quae, veritatis tempore! Possimus animi vel ab
              eaque?
            </p>
            <h3 className="to-hide-md">Management & Marketing</h3>
            <p className="to-hide-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              sequi alias laboriosam voluptatem rerum voluptas illum distinctio!
              Quidem tempora quasi suscipit ipsum, voluptate, soluta quis est
              autem nostrum aliquid error molestiae eius excepturi! Non quas
              obcaecati delectus blanditiis similique quaerat, officia minus
              repudiandae eligendi mollitia porro ipsum placeat corporis sequi
              velit ducimus doloribus magni temporibus facilis perferendis modi!
              Suscipit veritatis illum modi fugit sint cupiditate aliquam. In
              maxime sunt ab molestias magni aperiam exercitationem distinctio,
              quia nesciunt quibusdam assumenda voluptate voluptatibus autem
              delectus quisquam alias praesentium dolorum natus, ut earum
              impedit temporibus. Quae, veritatis tempore! Possimus animi vel ab
              eaque?
            </p>
          </div>
          <img src={ItsCooking} alt="Poster" />
        </div>
        <h3 className="to-hide-lg">Management & Marketing</h3>
        <p className="to-hide-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          sequi alias laboriosam voluptatem rerum voluptas illum distinctio!
          Quidem tempora quasi suscipit ipsum, voluptate, soluta quis est autem
          nostrum aliquid error molestiae eius excepturi! Non quas obcaecati
          delectus blanditiis similique quaerat, officia minus repudiandae
          eligendi mollitia porro ipsum placeat corporis sequi velit ducimus
          doloribus magni temporibus facilis perferendis modi! Suscipit
          veritatis illum modi fugit sint cupiditate aliquam. In maxime sunt ab
          molestias magni aperiam exercitationem distinctio, quia nesciunt
          quibusdam assumenda voluptate voluptatibus autem delectus quisquam
          alias praesentium dolorum natus, ut earum impedit temporibus. Quae,
          veritatis tempore! Possimus animi vel ab eaque?
        </p>
        <div className="event-col-divider day1">
          <img src={Day1} className="wide-pic" alt="Poster" />
          <div>
            <h3>Day 1</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              cum similique autem repellat, provident ad veniam voluptas vitae
              omnis odio voluptatibus eius quod quas blanditiis, corrupti,
              doloribus accusantium cumque nemo illum nobis dolore. Iste sequi
              quibusdam quo veritatis perferendis, maiores possimus voluptatem
              illum expedita quia tempore ipsam. Ullam excepturi quod tempora
              veniam aliquid. Voluptatibus libero animi ea quasi debitis
              quibusdam facere nesciunt saepe delectus non veritatis quo in
              pariatur fugit eligendi provident, error exercitationem placeat
              harum tempore expedita ut dolor laboriosam! Laudantium, optio,
              iure quisquam hic voluptate praesentium voluptatum sed sapiente at
              minus blanditiis assumenda? Laudantium a, architecto error magni
              nemo cupiditate quo, reprehenderit adipisci aliquid inventore quae
              tempora illo ducimus rem molestias, ab suscipit eligendi.
              Cupiditate, delectus debitis? Perferendis quam aliquid recusandae
              deserunt, nostrum reiciendis modi fuga atque perspiciatis
              molestias distinctio fugiat aliquam optio quos animi commodi aut.
              Iusto nesciunt blanditiis dignissimos cum facere enim quibusdam,
              perferendis consectetur suscipit.
            </p>
          </div>
        </div>
        <div className="event-col-divider day2">
          <div>
            <h3>Day 2</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              cum similique autem repellat, provident ad veniam voluptas vitae
              omnis odio voluptatibus eius quod quas blanditiis, corrupti,
              doloribus accusantium cumque nemo illum nobis dolore. Iste sequi
              quibusdam quo veritatis perferendis, maiores possimus voluptatem
              illum expedita quia tempore ipsam. Ullam excepturi quod tempora
              veniam aliquid. Voluptatibus libero animi ea quasi debitis
              quibusdam facere nesciunt saepe delectus non veritatis quo in
              pariatur fugit eligendi provident, error exercitationem placeat
              harum tempore expedita ut dolor laboriosam! Laudantium, optio,
              iure quisquam hic voluptate praesentium voluptatum sed sapiente at
              minus blanditiis assumenda? Laudantium a, architecto error magni
              nemo cupiditate quo, reprehenderit adipisci aliquid inventore quae
              tempora illo ducimus rem molestias, ab suscipit eligendi.
              Cupiditate, delectus debitis? Perferendis quam aliquid recusandae
              deserunt, nostrum reiciendis modi fuga atque perspiciatis
              molestias distinctio fugiat aliquam optio quos animi commodi aut.
              Iusto nesciunt blanditiis dignissimos cum facere enim quibusdam,
              perferendis consectetur suscipit.
            </p>
          </div>
          <img src={Day1} className="wide-pic" alt="Poster" />
        </div>
        <h3 className="text-center my-3">Event Gallery</h3>
        <CarouselTemp imagesArr={imgArr} />
      </div>
    </div>
  );
};

export default CookOff;
