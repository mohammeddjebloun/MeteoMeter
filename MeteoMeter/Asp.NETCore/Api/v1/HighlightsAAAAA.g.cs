
using System;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MeteoMeter.Backend.DataModels;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Services;
using MeteoMeter.Backend.ViewModels;

namespace MeteoMeter.Backend.Api.HighlightsAAAAA
{
	/// <summary>
	/// Controller responsible for all data interactions with the HighlightsAAAAA
	/// </summary>
	[Route("api/v1/MeteoMeterHighlightsAAAAA")]
	public partial class HighlightsAAAAA : Controller
	{
		private ICardService _CardService;
		private IPictureService _PictureService;
		private IUserProfileService _UserProfileService;
		private IReportingService _ReportingService;
		private IResultService _ResultService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.HighlightsAAAAAController"/> class.
		/// </summary>
		public HighlightsAAAAA(ICardService CardService,IPictureService PictureService,IUserProfileService UserProfileService,IReportingService ReportingService,IResultService ResultService)
		{
			_CardService = CardService;
			_PictureService = PictureService;
			_UserProfileService = UserProfileService;
			_ReportingService = ReportingService;
			_ResultService = ResultService;
		}

		[HttpGet]
		[Route("/api/highlights/getTopPosts")]
		[ProducesResponseType(typeof(TopPostaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> GetTopPosts()
		{
			

			try
			{
				var list = new List<TopPostaaaaaaaaaaaaaa>();
				return this.Ok(await Task.FromResult(list));
			}
			catch (Exception xcp)
			{
				//log error
				return Ok(Enumerable.Empty <TopPostaaaaaaaaaaaaaa> ().AsQueryable());
			}
		}

		[HttpGet]
		[Route("/api/highlights/getBestContributor")]
		[ProducesResponseType(typeof(BestContributoraaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> GetBestContributor()
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new BestContributoraaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/highlights/getBestPost")]
		[ProducesResponseType(typeof(Reportaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> GetBestPost()
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new Reportaaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/highlights/reloadCard")]
		[ProducesResponseType(typeof(Cardaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> ReloadCard(int cardId)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new Cardaaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}
	}
}