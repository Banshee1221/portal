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

import { ReactElement, useEffect, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import axios from 'axios';
import defaultTheme from '../../theme';
import { getConfig } from '../../../global/config';
import { EXPLORER_PATH, covizuGithubUrl } from '../../../global/utils/constants';
import { InternalLink as Link } from '../../Link';
import PageLayout from '../../PageLayout';

type ClusterData = {
  bytes: number;
  content_type: string;
  hash: string;
  last_modified: string;
  name: string;
};

const covizuVersion = '1.0.0';
const filesPath = '?format=json&prefix=' + covizuVersion + '/clusters.20';
const clustersFilenameTest = /^(\d+\.){2}\d+\/(clusters\.)\d{4}(\-\d{2}){2}(\.json)$/;
const dateTest = /\d{4}(\-\d{2}){2}/;

const VisualizationPage = (): ReactElement => {
  const theme: typeof defaultTheme = useTheme();
  const { NEXT_PUBLIC_COVIZU_DATA_URL, NEXT_PUBLIC_COVIZU_FILE_LIST_URL } = getConfig();

  // get list of clusters files to figure out the latest date
  const [isLoading, setLoading] = useState<boolean>(true);
  const [dataDate, setDataDate] = useState<string>('');
  const [hasError, setError] = useState(false);
  useEffect(() => {
    const filesUrlComplete = NEXT_PUBLIC_COVIZU_FILE_LIST_URL + filesPath;
    axios
      .get(filesUrlComplete, {
        headers: {
          'Cache-Control': 'no-cache',
          Expires: '0',
          Pragma: 'no-cache',
        },
      })
      .then((res) => {
        const clusters = res.data;
        const clusterNames = clusters
          .map((cluster: ClusterData) => cluster.name)
          .filter((clusterName: string) => clustersFilenameTest.test(clusterName))
          .sort();
        const latestDate = clusterNames[clusterNames.length - 1].match(dateTest)[0] || '';
        setDataDate(latestDate);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <PageLayout subtitle="Visualize Data">
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {isLoading ? (
          'Loading'
        ) : !dataDate || hasError ? (
          'Something went wrong.'
        ) : (
          <>
            <div
              css={css`
                background: ${theme.colors.grey_2};
                border: ${theme.colors.grey_3} 1px solid;
                padding: 15px 20px;
                margin: 15px;
                border-radius: 10px;
              `}
            >
              <a
                css={css`
                  color: ${theme.colors.primary_dark};
                  font-weight: bold;
                `}
                href={covizuGithubUrl}
                target="_blank"
              >
                Covizu
              </a>{' '}
              (an open source SARS-CoV-2 genome analysis and visualization system) has been used to
              visualize{' '}
              <Link path={EXPLORER_PATH}>
                <a
                  css={css`
                    color: ${theme.colors.primary_dark};
                    font-weight: bold;
                  `}
                >
                  Canadian VirusSeq data
                </a>
              </Link>{' '}
              colocalized with International GenBank data in a time-scaled phylogenetic tree to
              highlight potential cases of importation from other countries or ongoing community
              transmission.
            </div>
            <iframe
              css={css`
                flex: 1;
                border: 0;
              `}
              src={`/static/covizu/index.html?dataUrl=${NEXT_PUBLIC_COVIZU_DATA_URL}&covizuVersion=${covizuVersion}&dataDate=${dataDate}`}
              width="99%"
            />
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default VisualizationPage;