import { LinkNext } from '../LinkNext'

export const LinkList = () => (
  <>
    <li>
      <LinkNext href="/" text="Home" />
    </li>
    <li>
      <LinkNext href="/pub-sub-example" text="PubSub" />
    </li>
    <li>
      <LinkNext href="/observer-example" text="Observer" />
    </li>
    <li>
      <LinkNext href="/contact" text="Contact" />
    </li>
  </>
)
