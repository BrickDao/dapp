import React from 'react';

import Wrap from '../../components/common/Wrap';
import FadeIn from '../../components/common/FadeIn';

export default function CreateTransferProposal() {
  /**
   * Render
   */

  return (
    <RenderWrapper>
      <div>CreateTransferProposal TODO</div>
    </RenderWrapper>
  );
}

function RenderWrapper(props: React.PropsWithChildren<any>): JSX.Element {
  /**
   * Render
   */

  return (
    <Wrap className="section-wrapper">
      <FadeIn>
        <div className="titlebar">
          <h2 className="titlebar__title">Transfer</h2>
        </div>

        {/* RENDER CHILDREN */}
        {props.children}
      </FadeIn>
    </Wrap>
  );
}
