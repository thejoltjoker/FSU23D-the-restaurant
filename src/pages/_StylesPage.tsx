const StylesPage = () => {
  return (
    <>
      <h1>Basic Elements</h1>

      <p>
        The purpose of this page is to help determine the default styling of all
        possible HTML elements so nothing is overlooked in our final product.
      </p>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <h1>Paragraphs</h1>

      <p>
        <strong>
          Strong ipsum dolor sit amet, consectetuer adipiscing elit.
        </strong>{" "}
        <em>Em nullam dignissim convallis est. Quisque aliquam.</em> Donec
        faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero
        nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent
        mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu
        volutpat enim diam eget metus.
      </p>

      <blockquote>
        "This stylesheet is going to help so much." <cite>-Blockquote</cite>
      </blockquote>

      <p>
        Maecenas <b>b ornare</b> tortor. Donec sed <i>i eget sapien</i>{" "}
        fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at,
        commodo vitae, feugiat in, nunc. Morbi imperdiet augue{" "}
        <a href="#" title="Test Link">
          a quis tellus
        </a>
        .
      </p>

      <p>
        Lorem <sup>superscript</sup> ipsum dolor <sub>subscript</sub> sit amet,
        consectetuer adipiscing elit.{" "}
        <mark>Mark nullam dignissim convallis est.</mark> Quisque aliquam. Nunc
        iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet
        at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis
        luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget
        metus. I went to an NBA game and they played{" "}
        <abbr title="Sargeant">Sgt.</abbr> Pepper's Lonely Hearts Club Band.
        Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc.
      </p>

      <p>
        Est maecenas parturient quisque vestibulum malesuada nibh eu at a{" "}
        <del>del congue nulla</del> <ins>ins lorem ipsum</ins> odio ut nam a.
      </p>

      <small>
        Small facilisis parturient adipiscing a eu faucibus a aliquet ultrices
        quisque massa urna rhoncus ipsum ac felis ac taciti feugiat suspendisse
        sagittis imperdiet montes taciti parturient vivamus nisl mi justo.
      </small>

      <h1>Images</h1>

      <img src="http://via.placeholder.com/680x420" alt="Placeholder image" />

      <figure>
        <img src="http://via.placeholder.com/680x420" alt="Placeholder image" />
        <figcaption>This is a placeholder caption.</figcaption>
      </figure>

      <h1>Lists</h1>

      <h3>Ordered List</h3>

      <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ol>

      <h3>Unordered List</h3>

      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>

      <h3>Definition List</h3>

      <dl>
        <dt>List Item 1</dt>
        <dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</dd>
        <dt>List Item 2</dt>
        <dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</dd>
        <dt>List Item 3</dt>
        <dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</dd>
      </dl>

      <h1>Tables</h1>

      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th>Table Header 1</th>
            <th>Table Header 2</th>
            <th>Table Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Division 1</td>
            <td>Division 2</td>
            <td>Division 3</td>
          </tr>
          <tr>
            <td>Division 1</td>
            <td>Division 2</td>
            <td>Division 3</td>
          </tr>
          <tr>
            <td>Division 1</td>
            <td>Division 2</td>
            <td>Division 3</td>
          </tr>
          <tr>
            <td>Division 1</td>
            <td>Division 2</td>
            <td>Division 3</td>
          </tr>
        </tbody>
      </table>

      <h1>Miscellaneous</h1>

      <p>
        Magnis interdum amet adipiscing <code>code interdum duis</code> accumsan
        metus sociosqu malesuada sed viverra suspendisse.
      </p>

      <footer>
        Authored by Jesse Campbell
        <br />
        <address>Victoria, Canada</address>
      </footer>
    </>
  );
};

export default StylesPage;
