/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * @tag databinding
 * @tag list controller
 * @tag form controller
 */
qx.Class.define("qooxdoo_svg.Application", {
    extend: qx.application.Standalone,

    members: {
        main: function() {
            this.base(arguments);

            this.viewer = new qooxdoo_svg.SvgView();
           
            this.getRoot().add(this.viewer, {
                edge: 0, left: 0, right: 0, top: 0, bottom: 0
            });
        }
    }
});