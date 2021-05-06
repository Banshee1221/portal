/*
 *
 * Copyright (c) 2021 The Ontario Institute for Cancer Research. All rights reserved
 *
 *  This program and the accompanying materials are made available under the terms of
 *  the GNU Affero General Public License v3.0. You should have received a copy of the
 *  GNU Affero General Public License along with this program.
 *   If not, see <http://www.gnu.org/licenses/>.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 *  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 *  OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 *  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *  ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import { ReactElement } from 'react';
import { css } from '@emotion/react';

import { IconProps } from './types';

const GenomeCanadaLogo = ({ fill, height = 94, width = 56, style }: IconProps): ReactElement => {
  return (
    <svg
      css={css`
        ${style};
        height: ${height};
        width: ${width};
      `}
      width={width}
      height={height}
      viewBox={'0 0 94 56'}
    >
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <g>
            <g>
              <g>
                <path
                  fill="#033C82"
                  d="M18.555 53.552c0 .581.022 1.163.033 1.755l-.067.1c-.894.291-1.699.56-3.029.56-.793 0-1.341-.112-1.721-.213-.503-.145-1.442-.447-2.191-1.408-.581-.738-.894-1.733-.894-2.929 0-.85.19-1.878.648-2.671 1.017-1.7 2.616-2.102 4.08-2.102 1.33 0 2.19.358 2.727.582l.079.055c-.101.76-.123.962-.19 1.755l-.101.034c-.604-.391-1.185-.771-2.157-.771-1.61 0-2.705 1.095-2.705 3.096 0 .95.357 2.828 2.347 2.828.358 0 .615-.067.961-.134.023-1.152.011-1.465-.1-2.705l.067-.079 2.18-.033.066.078c-.01.648-.022 1.286-.022 1.911v.291h-.011zM32.225 55.765c-.972 0-1.185.011-1.99.034l-.067-.067c0-.414.012-.839.012-1.252 0-.458-.012-2.113-.034-2.515-.033-.436-.1-1.151-.771-1.151-.391 0-.682.2-.94.38.012 2.168.023 2.638.102 4.504l-.068.067c-.972 0-1.162 0-2.045.034l-.078-.067c.01-.772.022-1.554.022-2.325 0-1.967-.067-2.739-.168-3.79l.079-.089c.916-.123 1.129-.156 2.068-.346l.122.09-.022.67c.559-.324 1.207-.716 1.956-.716.436 0 1.14.1 1.52.727.302.492.313 1.05.336 2.213v.939c.022 1.185.022 1.52.09 2.593l-.124.067zM39.68 52.557c0-.47 0-2.425-1.71-3.096-.536-.212-1.173-.235-1.486-.235-2.135 0-3.331 1.13-3.331 3.354 0 .77.123 1.565.57 2.213.313.47.917 1.129 2.671 1.129 2.594 0 3.287-1.543 3.287-3.365m-2.113-.01c0 .994-.134 2.09-1.151 2.09-.324 0-.537-.146-.682-.28-.212-.201-.436-.615-.436-1.789 0-.346 0-1.128.246-1.542.179-.324.503-.548.894-.548.347 0 .626.18.783.38.279.347.346 1.04.346 1.688M50.076 55.765c-.86 0-1.13 0-2.046.034l-.078-.067c.011-.37.022-2.169.034-2.582 0-.235.01-.459.01-.693 0-1.04-.111-1.7-.804-1.7-.369 0-.637.168-.838.302l.01 1.219v.447c.012 1.464.023 1.8.101 2.95l-.067.068c-.838 0-1.095 0-2.034.045l-.067-.09c.022-.983.034-1.252.034-3.007 0-1.04-.023-1.9-.783-1.9-.302 0-.581.157-.838.336.011 2.1.022 2.66.112 4.526l-.079.068c-1.017 0-1.285.01-2.068.033l-.055-.067c0-.693.01-1.397.01-2.079 0-2.392-.078-3.063-.167-4.024l.078-.09c.85-.122 1.13-.167 2.08-.346l.111.112v.682c.559-.392 1.084-.75 1.9-.75.984 0 1.286.515 1.453.783.492-.335 1.163-.782 2.169-.782.19 0 1.04 0 1.52.693.358.514.347 1.263.335 2.068v.905c0 1.364.012 1.677.067 2.806l-.1.1zM56.738 53.988c-.47.246-1.017.525-1.912.525-.737 0-1.24-.234-1.531-.67-.179-.257-.224-.492-.268-.738l3.945-.067.079-.09c-.011-.592-.023-1.196-.19-1.8-.425-1.43-1.364-1.72-1.789-1.81-.302-.09-.592-.112-.872-.112-1.922 0-3.185 1.241-3.185 3.342 0 .57.1 1.163.29 1.588.705 1.632 2.37 1.777 3.253 1.777 1.017 0 1.453-.179 2.101-.436l.079-.1.09-1.364-.09-.045zm-3.7-2.168c.033-.38.123-.883.581-1.174.145-.1.324-.134.492-.134.402 0 .648.201.782.425.168.268.19.558.19.838l-2.045.045zM64.562 55.318c-.145.09-.29.168-.436.246-.47.235-1.196.402-1.978.402-2.739 0-4.147-2.034-4.147-4.415 0-2.235 1.397-4.482 4.214-4.482 1.24 0 1.81.29 2.302.537l.056.1c-.056.257-.078.313-.1.637l-.09.056c-.357-.246-.972-.66-2.18-.66-2.436 0-3.375 2.057-3.375 3.823 0 2.102 1.375 3.734 3.443 3.734.447 0 .905-.09 1.352-.268.47-.19.67-.358.95-.593l.1.056c-.044.302-.055.38-.055.715l-.056.112zM65.702 50.49l.1.044c.548-.28.929-.458 1.733-.458.861 0 1.13.413 1.196.559.09.19.1.47.112.793v.157l-1.073.156c-.682.112-1.554.257-2.101.738-.414.369-.637.905-.637 1.464 0 1.207.86 1.968 2.079 1.968.626 0 1.184-.202 1.732-.604l.011.425.09.067.648-.034.078-.09c-.078-1.128-.1-1.463-.078-3.095v-.75c0-1.184 0-1.452-.358-1.832-.28-.313-.76-.57-1.632-.57-.804 0-1.319.212-1.81.402l-.056.09-.034.57zm3.141 1.71v2.425c-.391.324-.805.648-1.598.648-1.006 0-1.442-.737-1.442-1.363 0-.637.48-.995.581-1.062.347-.257.738-.347 1.81-.559l.65-.09zM71.872 55.776l-.726.023-.056-.067c.011-.66.022-.973.022-1.487 0-.626-.011-1.274-.022-1.9-.011-1.375-.023-1.677-.112-2.627l.067-.09.749-.122.067.067-.045.626c.515-.313 1.219-.771 2.214-.771.234 0 .95 0 1.464.57.436.47.436 1.061.447 1.99l.022 1.229c.011 1.274.023 1.464.079 2.481l-.079.078-.737.023-.056-.09c.01-.57.022-.883.022-1.363s-.022-2.18-.045-2.817c-.01-.28-.033-.715-.29-1.017-.213-.246-.604-.414-1.04-.414-.916 0-1.643.548-1.978.816.01 2.046.022 2.515.111 4.795l-.078.067zM77.696 50.49l.1.044c.548-.28.928-.458 1.733-.458.85 0 1.129.413 1.196.559.09.19.1.47.112.793v.157l-1.073.156c-.682.112-1.554.257-2.102.738-.413.369-.637.905-.637 1.464 0 1.207.86 1.968 2.08 1.968.625 0 1.184-.202 1.732-.604l.01.425.09.067.649-.034.067-.09c-.067-1.128-.1-1.463-.067-3.095v-.75c0-1.184 0-1.452-.358-1.832-.28-.313-.76-.57-1.632-.57-.805 0-1.319.212-1.81.402l-.068.09-.022.57zm3.14 1.71v2.425c-.39.324-.804.648-1.598.648-1.006 0-1.442-.737-1.442-1.363 0-.637.47-.995.57-1.062.347-.257.738-.347 1.811-.559l.66-.09zM87.275 55.732l.078.067c.29-.023.358-.023.649-.023l.067-.055c-.1-1.945-.1-4.136-.1-6.204 0-1.084.01-2.18.021-3.275l-.078-.067c-.38.09-.436.1-.749.145l-.09.078c.09.727.09.928.113 3.152-.235-.01-.392-.01-.548-.01-.894 0-2.169.066-3.018.882-.525.492-.939 1.33-.939 2.37 0 1.643.995 3.085 2.75 3.085 1.04 0 1.576-.47 1.833-.693v.548h.011zm-.011-1.275c-.168.18-.693.738-1.688.738-1.352 0-2.09-1.095-2.09-2.47 0-.682.19-1.788 1.341-2.314.559-.246 1.185-.28 1.733-.28.301 0 .436.012.648.023 0 1.084.034 2.817.045 3.89v.413h.01zM89.69 50.49l.1.044c.548-.28.928-.458 1.733-.458.86 0 1.128.413 1.196.559.089.19.1.47.111.793v.157l-1.073.156c-.682.112-1.553.257-2.101.738-.414.369-.637.905-.637 1.464 0 1.207.85 1.968 2.079 1.968.626 0 1.185-.202 1.732-.604l.012.425.089.067.648-.034.078-.09c-.078-1.128-.1-1.463-.078-3.095v-.75c0-1.184 0-1.452-.357-1.832-.28-.313-.76-.57-1.621-.57-.805 0-1.32.212-1.811.402l-.056.09-.045.57zm3.14 1.71v2.425c-.39.324-.804.648-1.598.648-1.006 0-1.442-.737-1.442-1.363 0-.637.48-.995.581-1.062.347-.257.738-.347 1.811-.559l.648-.09zM25.44 52.949c-.01-.593-.01-1.286-.179-1.7-.145-.357-.815-1.285-2.414-.704-.022.011-.045.011-.067.034-.022.033.011.056.011.056.414.179.66.514.66 1.129l-2.046.044s-.078-.436.201-1.006c.224-.47.794-1.117 1.934-1.34.458-.068.548-.023.593-.034.01 0 .055-.023.01-.056 0 0-.044-.034-.122-.045-.201-.067-.649-.168-1.442-.168-1.923 0-3.186 1.297-3.186 3.398 0 .57.1 1.163.29 1.588.705 1.631 2.37 1.777 3.254 1.777 1.017 0 1.453-.18 2.1-.436l.08-.1.089-1.364-.09-.034c-.47.246-1.017.525-1.911.525-.727 0-1.23-.234-1.532-.67-.19-.257-.223-.492-.268-.738l3.946-.067.09-.09zM3.13 25.384c1.05-.368 2.459-.715 4.806-1.084l.86-.145c.09-.011.135-.056.146-.1.034-.101-.022-.157-.19-.202-.201-.045-.525-.1-.794-.168-2.56-.592-2.928-1.34-2.95-2.101-.012-.436.19-.883.737-1.252.716-.492 1.923-.76 2.627-.905 4.918-1.029 12.34-1.185 12.34-7.769 0-2.626-1.643-4.303-3.085-5.197-1.062-.66-2.034-.861-2.034-.861v2.582s1.542 1.04 1.542 3.03c0 2.235-.905 4.671-6.058 5.733-3.241.671-5.566 1.13-7.22 1.822-1.655.693-2.683 1.968-2.817 3.152-.112 1.051.156 2.493 2.09 3.465M19.315 27.262c-1.006.47-2.247.872-4.225 1.263-.503.1-.85.146-1.062.19-.168.034-.212.112-.179.19.022.067.078.09.224.123.234.056.614.123 1.073.246 1.129.347 1.866.816 2.269 1.275.413.458.615 1.017.615 1.687 0 .772-.246 1.453-.738 2.023-.67.727-1.789 1.33-3.353 1.789-.772.235-1.822.436-3.04.548v2.056c3.107-.167 6.158-.916 7.868-2.023 1.956-1.252 2.94-2.928 2.94-5.03 0-1.24-.347-2.314-1.05-3.197-.481-.547-.928-.871-1.342-1.14"
                  transform="translate(-25 -1011) translate(0 1003) translate(25 8)"
                />
                <path
                  fill="#EB022B"
                  d="M9.568 35.858c-.324-.112-.995-.302-1.688-.581-1.833-.75-3.543-1.822-3.498-3.633.044-1.721 1.632-2.794 4.504-3.353 3.152-.615 7.78-1.073 10.116-2.258 2.303-1.029 2.079-3.655.693-4.896-.134-.123-.224-.212-.29-.179-.101.045-.079.123-.034.246.123.358.29 1.028-.034 1.598-1.129 1.968-7.455 1.956-12.955 3.007-4.538.872-6.427 3.007-6.326 5.354.112 2.437 2.459 4.27 5.734 4.773 1.308.201 3.074.29 3.711.201.168-.022.212-.078.212-.167 0-.045-.033-.067-.145-.112M5.812 16.744c1.051-.313 3.834-.894 3.834-.894.067-.011.134-.022.146-.1.01-.057-.012-.112-.09-.135-.09-.022-1.05-.223-1.978-.827-1.241-.805-2.213-1.978-2.146-3.7.078-2.291 1.99-3.733 4.18-4.404 1.99-.603 3.812-.872 4.94-1.598 2.158-1.364 1.934-3.644.727-4.784-.168-.157-.28-.268-.369-.224-.09.045-.078.146-.033.257.112.28.357.962.033 1.588-.592 1.15-3.878 1.564-6.349 2.09-3.297.693-5.063 1.755-6.37 3.342-.783.95-1.264 2.336-1.264 3.733 0 3.152 2.437 4.795 4.74 5.656"
                  transform="translate(-25 -1011) translate(0 1003) translate(25 8)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default GenomeCanadaLogo;
