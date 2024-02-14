import Image from "next/image";
import React from "react";

export default function Review() {
  return (
    <>
      <div className="bg-RED h-1"></div>
      <div className="min-w-screen min-h-screen flex items-center justify-center">
        <div className="w-full bg-dark px-4 py-16 md:py-24 text-dark">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-6xl font-bold mb-5 text-white">
                What people <br />
                are saying.
              </h1>
              <h3 className="text-xl mb-5 font-light text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-RED ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-RED ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-RED ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-RED ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-RED ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-RED p-5 text-dark font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50">
                      <Image src="https://i.pravatar.cc/100?img=1" alt="" width={100} height={100}/>
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-dark">
                        Kenzie Edgar.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos sunt ratione dolor exercitationem minima quas itaque
                      saepe quasi architecto vel! Accusantium, vero sint
                      recusandae cum tempora nemo commodi soluta deleniti.
                      <span className="text-lg leading-none italic font-bold text-dark ml-1">
                      &quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white text-dark p-5 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50">
                      <Image src="https://i.pravatar.cc/100?img=2" alt=""  width={100} height={100}/>
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-dark">
                        Stevie Tifft.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                      Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                      Dolore quod necessitatibus, labore sapiente, est,
                      dignissimos ullam error ipsam sint quam tempora vel.
                      <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg text-dark bg-white p-5 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50">
                      <Image src="https://i.pravatar.cc/100?img=3" alt=""  width={100} height={100}/>
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-dark">
                        Tommie Ewart.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vitae, obcaecati ullam excepturi dicta error deleniti
                      sequi.
                      <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-RED p-5 text-dark font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50">
                      <Image src="https://i.pravatar.cc/100?img=4" alt=""  width={100} height={100}/>
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-dark">
                        Charlie Howse.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto inventore voluptatum nostrum atque, corrupti,
                      vitae esse id accusamus dignissimos neque reprehenderit
                      natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                      iusto.
                      <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-RED p-5 text-dark font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50">
                      <Image src="https://i.pravatar.cc/100?img=5" alt=""  width={100} height={100}/>
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-dark">
                        Nevada Herbertson.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                      ipsum, laboriosam nostrum facere exercitationem pariatur
                      deserunt tempora molestiae assumenda nesciunt alias eius?
                      Illo, autem!
                      <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg text-dark bg-white p-5 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50">
                      <Image src="https://i.pravatar.cc/100?img=6" alt=""  width={100} height={100}/>
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-dark">
                        Kris Stanton.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem iusto, explicabo, cupiditate quas totam!
                      <span className="text-lg leading-none italic font-bold text-dark mr-1">
                      &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-RED h-1"></div>
    </>
  );
}
