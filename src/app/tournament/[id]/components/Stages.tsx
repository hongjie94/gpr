import Sections from "./Sections";
import { formatText } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StagesComponent, StagesType } from "../../type";

const Stages: StagesComponent = ({ stages }) => {
  return (
    <>
      <div className="space-y-4">
        {stages.map((stage: StagesType, index: number) => (
          <div
            key={index}
            className="border border-stone-200 bg-zinc-100 dark:bg-stone-950 dark:border-stone-800 p-6 rounded-lg shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Stage: {formatText(stage.name)}
            </h2>
            <Accordion type="single" collapsible>
              {stage.sections.map((section, index: number) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <div key={index} className="mb-4">
                    <AccordionTrigger>
                      <h1 className="text-xl font-semibold">
                        {formatText(section.name)}
                      </h1>
                    </AccordionTrigger>
                    <p className="text-muted  mb-4">
                      Matches: {section.matches.length}
                    </p>
                    <AccordionContent>
                      <div className="space-y-10">
                        <Sections section={section} />
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stages;
