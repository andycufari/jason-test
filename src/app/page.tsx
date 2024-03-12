import Image from "next/image";
import JasonCraftThisJSON, { JasonJSON } from '@cm64/jasonjs';

export default function Home() {
  const json: JasonJSON = {
    components: [
      {
        component: 'div',
        type: 'JTag',
        attributes: { className: 'test-class' },
        components: [
          {
            component: 'span',
            type: 'JTag',
            attributes: {},
            innerHTML: 'Test Content'
          }
        ]
      }
    ]
  };

  return (
    <JasonCraftThisJSON json={json} />
  );
}
