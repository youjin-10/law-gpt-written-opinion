import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const qna = [
  {
    id: 1,
    question: "Law-GPT 로지피티가 무엇인가요?",
    answer:
      "Law-GPT 로지피티는 생성 ai를 활용하여 무료 법률 상담을 제공하는 서비스 입니다. 다만 ai의 답변일 뿐이니 참고만 하시고, 정확한 답변은 전문 법조인과 상담을 통해서 얻는 것을 권장합니다.",
  },
  {
    id: 2,
    question: "Law-GPT 로지피티를 사용하면 전문 법조인과의 상담은 필요 없나요?",
    answer:
      "어디까지나 ai의 답변일 뿐이니 참고용으로 사용하는 것을 권장합니다. 정확한 답변은 전문 법조인과의 상담을 부탁 드립니다.",
  },
];

export default function QnaAccordion() {
  return (
    <div className="w-full px-4 pt-16">
      <h3 className="text-xl md:text-3xl font-bold">FAQ</h3>
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {qna.map((data) => {
          return (
            <Disclosure as="div" className="mt-4" key={data.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{data.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {data.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
