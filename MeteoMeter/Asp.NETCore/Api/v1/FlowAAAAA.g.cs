
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

namespace MeteoMeter.Backend.Api.FlowAAAAA
{
	/// <summary>
	/// Controller responsible for all data interactions with the FlowAAAAA
	/// </summary>
	[Route("api/v1/MeteoMeterFlowAAAAA")]
	public partial class FlowAAAAA : Controller
	{
		private ICardService _CardService;
		private IReportingService _ReportingService;
		private IPictureService _PictureService;
		private IResultService _ResultService;
		private IUserProfileService _UserProfileService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.FlowAAAAAController"/> class.
		/// </summary>
		public FlowAAAAA(ICardService CardService,IReportingService ReportingService,IPictureService PictureService,IResultService ResultService,IUserProfileService UserProfileService)
		{
			_CardService = CardService;
			_ReportingService = ReportingService;
			_PictureService = PictureService;
			_ResultService = ResultService;
			_UserProfileService = UserProfileService;
		}

		[HttpGet]
		[Route("/api/flow/list")]
		[ProducesResponseType(typeof(Cardaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> List(Pagingaaaaaaaaaaaaaa paging,int userProfileId)
		{
			

			try
			{
				var list = new List<Cardaaaaaaaaaaaaaa>();
				var result = _ResultService.GetAll();
				if(result != null)
				{
					foreach(var item in result)
					{
						//Todo, put your mapping implementation here
					}

					return this.Ok(await Task.FromResult(list));
				}
			
				return NotFound();
			}
			catch (Exception xcp)
			{
				//log error
				return Ok(Enumerable.Empty <Cardaaaaaaaaaaaaaa> ().AsQueryable());
			}
		}

		[HttpPut]
		[Route("/api/flow/addView")]
		public async Task<IActionResult> AddView(UserViewCardaaaaaaaaaaaaaa userViewCard)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Card =  userViewCard.GetCardFromViewModel();
				await _CardService.Save(Card);
				var UserProfile =  userViewCard.GetUserProfileFromViewModel();
				await _UserProfileService.Save(UserProfile);

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}
	}
}