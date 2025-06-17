import LangSwitcher from '@/components/LangSwitcher';
import IconGithub from '@/svg/IconGithub';
import IconLinkedIn from '@/svg/IconLinkedIn';
import IconMail from '@/svg/IconMail';
import type { Alternates } from '@/types/base';

export default function HeaderIsland({
  alternates,
}: {
  alternates: Alternates;
}) {
  return (
    <div class="header">
      <div class="header-row">
        <div class="header-element">
          <a
            href="https://www.linkedin.com/in/tarek-dinkespiler/"
            target="_blank"
            class="header-icon"
          >
            <IconLinkedIn />
          </a>
          <a
            href="https://github.com/seemlesscode"
            target="_blank"
            class="header-icon"
          >
            <IconGithub />
          </a>
          <a
            href="mailto:tarek@seemlesscode.com"
            target="_blank"
            class="header-icon"
          >
            <IconMail />
          </a>
        </div>
        <div class="header-element reverse">
          <LangSwitcher alternates={alternates} />
        </div>
      </div>
    </div>
  );
}
