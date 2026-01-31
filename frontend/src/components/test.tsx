import React from 'react'

type Props = {}

const Test = (props: Props) => {
  return (
    <div className="w600:p-[30px] w600:text-lg w400:p-5 w400:text-base p-10 text-xl leading-[1.7]">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        doloremque dolores accusamus rerum hic unde!
      </p>

      <br />

      <p>
        This is the windowed portfolio neobrutalism template. Check the{' '}
        <a
          className="font-bold underline"
          target="_blank"
          href="https://github.com/neobrutalism-templates/windowed-portfolio"
        >
          github repo
        </a>{' '}
        for more info.
      </p>
    </div>
  )
}

export default Test